# Rest & Spread Operators in Large Applications - Technical Examples

## Table of Contents
1. [State Management (Redux/Context)](#state-management)
2. [API Response Handling](#api-response-handling)
3. [Component Props Management](#component-props-management)
4. [Configuration & Environment Management](#configuration--environment-management)
5. [Middleware & Plugin Systems](#middleware--plugin-systems)
6. [Database Operations](#database-operations)
7. [Error Handling & Logging](#error-handling--logging)
8. [Performance Optimization](#performance-optimization)

## State Management

### Redux Store Updates (Spread)
```javascript
// reducers/userReducer.js - Large e-commerce application
const initialState = {
  profile: null,
  preferences: {},
  cart: [],
  orders: [],
  addresses: [],
  paymentMethods: [],
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return {
        ...state,  // Spread existing state
        profile: {
          ...state.profile,  // Spread existing profile
          ...action.payload  // Override with new data
        },
        loading: false
      };
    
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [
          ...state.cart,  // Spread existing cart items
          action.payload  // Add new item
        ]
      };
    
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map(item => 
          item.id === action.payload.id 
            ? { ...item, ...action.payload }  // Spread to update specific item
            : item
        )
      };
    
    case 'BULK_UPDATE_PREFERENCES':
      return {
        ...state,
        preferences: {
          ...state.preferences,  // Keep existing preferences
          ...action.payload      // Add/update new preferences
        }
      };
      
    default:
      return state;
  }
};

// actions/userActions.js
export const updateUserProfile = (updates) => ({
  type: 'UPDATE_PROFILE',
  payload: updates
});

// Usage in component
const handleProfileUpdate = (formData) => {
  const { password, confirmPassword, ...profileData } = formData;  // Rest to exclude sensitive data
  dispatch(updateUserProfile(profileData));
};
```

### Context API with Complex State (Rest & Spread)
```javascript
// contexts/AppContext.js - Enterprise dashboard application
import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  user: null,
  theme: 'light',
  notifications: [],
  modules: {},
  permissions: [],
  settings: {}
};

function appReducer(state, action) {
  const { type, ...payload } = action;  // Rest to separate type from payload
  
  switch (type) {
    case 'INITIALIZE_APP':
      return {
        ...state,
        ...payload  // Spread all initialization data
      };
    
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: {
          ...state.settings,
          ...payload.settings  // Deep merge settings
        }
      };
      
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  // Utility function using rest/spread
  const updateMultipleFields = (...updates) => {  // Rest parameter for multiple updates
    const mergedUpdate = updates.reduce((acc, update) => ({
      ...acc,
      ...update  // Spread each update into accumulator
    }), {});
    
    dispatch({ type: 'UPDATE_SETTINGS', settings: mergedUpdate });
  };
  
  return (
    <AppContext.Provider value={{ state, dispatch, updateMultipleFields }}>
      {children}
    </AppContext.Provider>
  );
};
```

## API Response Handling

### Response Transformation & Error Handling
```javascript
// services/apiService.js - Microservices communication
class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  // Generic API call with spread for flexible headers
  async makeRequest(endpoint, options = {}) {
    const {
      headers: customHeaders,
      body,
      ...restOptions  // Rest to separate body and headers from other options
    } = options;

    const requestConfig = {
      ...restOptions,  // Spread remaining options (method, credentials, etc.)
      headers: {
        ...this.defaultHeaders,  // Spread default headers
        ...customHeaders         // Override with custom headers
      }
    };

    if (body) {
      requestConfig.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, requestConfig);
      const data = await response.json();
      
      if (!response.ok) {
        const { message, code, details, ...errorMeta } = data;  // Rest for additional error info
        throw new ApiError(message, code, { details, ...errorMeta });
      }
      
      return data;
    } catch (error) {
      // Error handling with spread
      throw {
        ...error,  // Spread original error
        timestamp: new Date().toISOString(),
        endpoint
      };
    }
  }

  // Batch API calls with spread
  async batchRequests(...requests) {  // Rest parameter for multiple requests
    const promises = requests.map(request => 
      this.makeRequest(request.endpoint, { ...request.options })  // Spread options
    );
    
    return Promise.allSettled(promises);
  }

  // Data transformation with rest/spread
  async getUserData(userId, ...includeFields) {  // Rest for flexible field selection
    const response = await this.makeRequest(`/users/${userId}`);
    const { id, email, profile, permissions, ...additionalData } = response;
    
    const userData = { id, email };  // Base data
    
    // Conditionally spread additional fields
    if (includeFields.includes('profile')) {
      userData.profile = profile;
    }
    if (includeFields.includes('permissions')) {
      userData.permissions = permissions;
    }
    if (includeFields.includes('all')) {
      return { ...userData, ...additionalData };  // Spread all data
    }
    
    return userData;
  }
}

// Usage
const api = new ApiService('https://api.company.com');

// Multiple requests with different headers
const responses = await api.batchRequests(
  { endpoint: '/users', options: { method: 'GET' } },
  { endpoint: '/products', options: { method: 'GET', headers: { 'Cache-Control': 'no-cache' } } },
  { endpoint: '/orders', options: { method: 'GET', headers: { 'Authorization': `Bearer ${token}` } } }
);
```

### Data Aggregation from Multiple Services
```javascript
// services/dataAggregator.js - Enterprise data pipeline
class DataAggregator {
  constructor(services) {
    this.services = services;
  }

  // Aggregate data from multiple microservices
  async aggregateUserDashboard(userId, ...moduleNames) {  // Rest for flexible modules
    const baseData = {
      userId,
      timestamp: new Date().toISOString(),
      modules: {}
    };

    // Parallel API calls for different modules
    const modulePromises = moduleNames.map(async moduleName => {
      try {
        const moduleData = await this.services[moduleName].getData(userId);
        return { [moduleName]: moduleData };
      } catch (error) {
        return { 
          [moduleName]: { 
            error: true, 
            message: error.message,
            ...error.details  // Spread error details
          } 
        };
      }
    });

    const moduleResults = await Promise.allSettled(modulePromises);
    
    // Combine all module data using spread
    const aggregatedData = moduleResults.reduce((acc, result) => {
      if (result.status === 'fulfilled') {
        return {
          ...acc,
          modules: {
            ...acc.modules,
            ...result.value  // Spread module data
          }
        };
      }
      return acc;
    }, baseData);

    return aggregatedData;
  }

  // Transform and sanitize data
  sanitizeAggregatedData(data, ...allowedFields) {  // Rest for field filtering
    const { userId, timestamp, modules, ...metadata } = data;
    
    const sanitizedModules = Object.entries(modules).reduce((acc, [key, value]) => {
      const { sensitiveData, internalId, ...publicData } = value;  // Rest to exclude sensitive data
      
      // Only include allowed fields
      if (allowedFields.length === 0 || allowedFields.includes(key)) {
        acc[key] = publicData;
      }
      
      return acc;
    }, {});

    return {
      userId,
      timestamp,
      modules: sanitizedModules,
      ...metadata  // Spread non-sensitive metadata
    };
  }
}

// Usage
const aggregator = new DataAggregator({
  analytics: analyticsService,
  inventory: inventoryService,
  sales: salesService,
  customer: customerService
});

const dashboardData = await aggregator.aggregateUserDashboard(
  'user123', 
  'analytics', 
  'sales', 
  'customer'
);

const publicData = aggregator.sanitizeAggregatedData(
  dashboardData, 
  'analytics', 
  'sales'
);
```

## Component Props Management

### Higher-Order Components (HOCs)
```javascript
// hocs/withAuthentication.js - Authentication wrapper for enterprise app
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const withAuthentication = (requiredPermissions = []) => (WrappedComponent) => {
  return (props) => {
    const { user, permissions } = useAuth();
    const { 
      onUnauthorized, 
      fallbackComponent: FallbackComponent,
      ...componentProps  // Rest to separate HOC props from component props
    } = props;

    const hasPermission = requiredPermissions.every(permission => 
      permissions.includes(permission)
    );

    if (!user || !hasPermission) {
      if (FallbackComponent) {
        return <FallbackComponent reason="unauthorized" />;
      }
      if (onUnauthorized) {
        onUnauthorized();
      }
      return <div>Access Denied</div>;
    }

    // Spread component props and add auth-related props
    return (
      <WrappedComponent 
        {...componentProps}  // Spread original props
        user={user}
        permissions={permissions}
        isAuthenticated={true}
      />
    );
  };
};

// Usage
const AdminPanel = ({ user, permissions, data, onUpdate, ...otherProps }) => {
  // Component implementation
  return <div {...otherProps}>Admin Panel Content</div>;
};

export default withAuthentication(['admin', 'write'])(AdminPanel);
```

### Dynamic Form Components
```javascript
// components/DynamicForm.js - Enterprise form builder
import React, { useState } from 'react';

const DynamicForm = ({ 
  schema, 
  initialValues = {}, 
  onSubmit, 
  validators = {},
  ...formProps  // Rest for additional form attributes
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle field changes with spread
  const handleFieldChange = (fieldName, value, ...additionalData) => {  // Rest for extra field data
    setFormData(prev => ({
      ...prev,  // Spread existing form data
      [fieldName]: value,
      // Spread any additional field metadata
      ...(additionalData.length > 0 && { 
        [`${fieldName}_meta`]: additionalData 
      })
    }));

    // Clear field error on change
    if (errors[fieldName]) {
      setErrors(prev => {
        const { [fieldName]: removed, ...restErrors } = prev;  // Rest to remove specific error
        return restErrors;
      });
    }
  };

  // Batch validation
  const validateFields = (...fieldNames) => {  // Rest for flexible field validation
    const newErrors = {};
    
    fieldNames.forEach(fieldName => {
      const validator = validators[fieldName];
      const value = formData[fieldName];
      
      if (validator) {
        const error = validator(value, formData);  // Pass entire form data for cross-field validation
        if (error) {
          newErrors[fieldName] = error;
        }
      }
    });

    setErrors(prev => ({
      ...prev,      // Keep existing errors for other fields
      ...newErrors  // Add/update new errors
    }));

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const allFieldNames = Object.keys(schema);
    const isValid = validateFields(...allFieldNames);
    
    if (isValid) {
      // Separate form data from metadata before submission
      const submissionData = Object.keys(formData).reduce((acc, key) => {
        if (!key.endsWith('_meta')) {
          acc[key] = formData[key];
        }
        return acc;
      }, {});
      
      onSubmit({
        ...submissionData,  // Spread clean form data
        metadata: {
          submittedAt: new Date().toISOString(),
          fieldCount: allFieldNames.length
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} {...formProps}>
      {schema.map(field => {
        const { name, type, validation, ...fieldProps } = field;  // Rest for additional field props
        
        return (
          <div key={name} className="form-field">
            <input
              type={type}
              value={formData[name] || ''}
              onChange={(e) => handleFieldChange(name, e.target.value)}
              {...fieldProps}  // Spread additional field properties
            />
            {errors[name] && <span className="error">{errors[name]}</span>}
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

// Usage in large application
const UserRegistrationForm = () => {
  const formSchema = [
    { name: 'email', type: 'email', required: true, placeholder: 'Enter email' },
    { name: 'password', type: 'password', required: true, minLength: 8 },
    { name: 'firstName', type: 'text', required: true, maxLength: 50 }
  ];

  const validators = {
    email: (value) => !value?.includes('@') ? 'Invalid email' : null,
    password: (value) => value?.length < 8 ? 'Password too short' : null
  };

  const handleFormSubmit = (data) => {
    const { metadata, ...userData } = data;  // Rest to separate user data from metadata
    
    // Send user data to API
    userService.register({
      ...userData,  // Spread user data
      registrationSource: 'web',
      timestamp: metadata.submittedAt
    });
  };

  return (
    <DynamicForm
      schema={formSchema}
      validators={validators}
      onSubmit={handleFormSubmit}
      className="registration-form"
      autoComplete="on"
    />
  );
};
```

## Configuration & Environment Management

### Environment Configuration System
```javascript
// config/environmentConfig.js - Multi-environment enterprise setup
class EnvironmentConfig {
  constructor() {
    this.baseConfig = {
      app: {
        name: 'Enterprise Application',
        version: '2.1.0'
      },
      features: {
        analytics: true,
        debugging: false,
        beta_features: false
      },
      api: {
        timeout: 30000,
        retries: 3
      }
    };
  }

  // Load configuration with environment overrides
  loadConfig(environment, ...overrides) {  // Rest for additional config overrides
    const envConfigs = {
      development: {
        api: {
          baseURL: 'http://localhost:3000/api',
          timeout: 60000
        },
        features: {
          debugging: true,
          beta_features: true
        },
        logging: {
          level: 'debug',
          console: true
        }
      },
      
      staging: {
        api: {
          baseURL: 'https://staging-api.company.com',
          timeout: 45000
        },
        features: {
          debugging: true,
          beta_features: true
        },
        logging: {
          level: 'info',
          console: false,
          service: 'datadog'
        }
      },
      
      production: {
        api: {
          baseURL: 'https://api.company.com',
          timeout: 30000
        },
        features: {
          debugging: false,
          beta_features: false
        },
        logging: {
          level: 'error',
          console: false,
          service: 'splunk'
        }
      }
    };

    // Deep merge configurations using spread
    const envConfig = envConfigs[environment] || {};
    
    const mergedConfig = this.deepMerge(
      this.baseConfig,
      envConfig,
      ...overrides  // Apply additional overrides
    );

    return mergedConfig;
  }

  // Deep merge utility using rest/spread
  deepMerge(target, ...sources) {  // Rest parameter for multiple sources
    if (!sources.length) return target;
    
    return sources.reduce((acc, source) => {
      Object.keys(source).forEach(key => {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
          if (!acc[key]) acc[key] = {};
          acc[key] = this.deepMerge(acc[key], source[key]);
        } else {
          acc[key] = source[key];
        }
      });
      return acc;
    }, { ...target });  // Spread target to avoid mutation
  }

  // Feature flag management
  getFeatureConfig(features, userGroup = 'default', ...additionalContext) {  // Rest for extra context
    const featureOverrides = {
      admin: {
        analytics: true,
        debugging: true,
        beta_features: true,
        admin_panel: true
      },
      beta_user: {
        beta_features: true
      },
      default: {}
    };

    const contextualFeatures = additionalContext.reduce((acc, context) => {
      if (context.isPremium) {
        acc.premium_features = true;
      }
      if (context.region === 'EU') {
        acc.gdpr_compliance = true;
      }
      return acc;
    }, {});

    return {
      ...features,                    // Base features
      ...featureOverrides[userGroup], // User group overrides
      ...contextualFeatures          // Contextual features
    };
  }
}

// Usage
const configManager = new EnvironmentConfig();

const config = configManager.loadConfig(
  process.env.NODE_ENV,
  // Additional overrides
  {
    api: {
      customHeader: 'X-Company-Client'
    }
  },
  {
    features: {
      new_dashboard: true
    }
  }
);

const userFeatures = configManager.getFeatureConfig(
  config.features,
  'admin',
  { isPremium: true, region: 'EU' }
);
```

## Middleware & Plugin Systems

### Express.js Middleware Chain
```javascript
// middleware/middlewareChain.js - Enterprise API middleware system
class MiddlewareChain {
  constructor() {
    this.middlewares = [];
  }

  // Add middleware with configuration
  use(middleware, ...config) {  // Rest parameter for middleware configuration
    this.middlewares.push({
      handler: middleware,
      config: config.length > 0 ? config[0] : {}
    });
    return this;  // Chainable
  }

  // Create middleware executor
  createHandler() {
    return (req, res, next) => {
      let index = 0;

      const executeNext = async (error) => {
        if (error) return next(error);
        
        if (index >= this.middlewares.length) {
          return next();
        }

        const { handler, config } = this.middlewares[index++];
        
        try {
          // Pass config as spread parameters to middleware
          await handler(req, res, executeNext, ...Object.values(config));
        } catch (err) {
          next(err);
        }
      };

      executeNext();
    };
  }
}

// Middleware implementations
const authenticationMiddleware = async (req, res, next, requiredRoles = [], options = {}) => {
  const { authorization } = req.headers;
  const { strict = true, allowAnonymous = false, ...authOptions } = options;
  
  try {
    if (!authorization && !allowAnonymous) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (authorization) {
      const token = authorization.replace('Bearer ', '');
      const user = await verifyToken(token, { ...authOptions });
      
      // Spread user data into request
      req.user = { ...user };
      req.permissions = [...(user.permissions || [])];  // Spread permissions array
      
      // Check roles
      if (requiredRoles.length > 0 && strict) {
        const hasRole = requiredRoles.some(role => req.permissions.includes(role));
        if (!hasRole) {
          return res.status(403).json({ error: 'Insufficient permissions' });
        }
      }
    }

    next();
  } catch (error) {
    next({ ...error, middleware: 'authentication' });  // Spread error with context
  }
};

const loggingMiddleware = async (req, res, next, logLevel = 'info', ...logFields) => {  // Rest for custom log fields
  const startTime = Date.now();
  
  // Create log entry with spread
  const logEntry = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    userAgent: req.get('User-Agent'),
    ip: req.ip,
    // Spread additional custom fields
    ...logFields.reduce((acc, field) => {
      if (typeof field === 'object') {
        return { ...acc, ...field };
      }
      return acc;
    }, {})
  };

  // Add user info if available
  if (req.user) {
    logEntry.user = {
      id: req.user.id,
      email: req.user.email
    };
  }

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    const finalLog = {
      ...logEntry,  // Spread initial log data
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      responseSize: res.get('content-length') || 0
    };
    
    logger.log(logLevel, 'API Request', finalLog);
  });

  next();
};

const rateLimitingMiddleware = async (req, res, next, limits = {}, ...bypassConditions) => {  // Rest for bypass conditions
  const defaultLimits = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100,
    skipSuccessfulRequests: false
  };

  const config = { ...defaultLimits, ...limits };  // Spread limits with defaults
  
  const identifier = req.user?.id || req.ip;
  const key = `ratelimit:${identifier}:${req.route?.path || req.url}`;

  // Check bypass conditions
  const shouldBypass = bypassConditions.some(condition => {
    if (typeof condition === 'function') {
      return condition(req);
    }
    if (typeof condition === 'object') {
      return Object.entries(condition).every(([key, value]) => req[key] === value);
    }
    return false;
  });

  if (shouldBypass) {
    return next();
  }

  try {
    const current = await redis.get(key);
    const requests = parseInt(current) || 0;

    if (requests >= config.maxRequests) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        retryAfter: Math.ceil(config.windowMs / 1000),
        limit: config.maxRequests,
        remaining: 0
      });
    }

    await redis.setex(key, Math.ceil(config.windowMs / 1000), requests + 1);
    
    // Add rate limit headers
    res.set({
      'X-RateLimit-Limit': config.maxRequests,
      'X-RateLimit-Remaining': Math.max(0, config.maxRequests - requests - 1),
      'X-RateLimit-Reset': new Date(Date.now() + config.windowMs).toISOString()
    });

    next();
  } catch (error) {
    next({ ...error, middleware: 'rateLimit' });
  }
};

// Usage - Building middleware chain for different routes
const publicApiChain = new MiddlewareChain()
  .use(loggingMiddleware, 'info', { service: 'public-api' })
  .use(rateLimitingMiddleware, 
    { maxRequests: 1000, windowMs: 60000 },
    (req) => req.user?.plan === 'premium'  // Bypass condition
  )
  .use(authenticationMiddleware, [], { allowAnonymous: true });

const adminApiChain = new MiddlewareChain()
  .use(loggingMiddleware, 'debug', { service: 'admin-api', detailed: true })
  .use(authenticationMiddleware, ['admin', 'super_admin'], { strict: true })
  .use(rateLimitingMiddleware, { maxRequests: 10000, windowMs: 60000 });

// Apply to routes
app.use('/api/public/*', publicApiChain.createHandler());
app.use('/api/admin/*', adminApiChain.createHandler());
```

## Database Operations

### MongoDB Aggregation Pipeline
```javascript
// services/databaseAggregation.js - Complex data aggregation for analytics
class DatabaseAggregation {
  constructor(db) {
    this.db = db;
  }

  // Build dynamic aggregation pipeline
  async buildSalesAnalytics(filters = {}, ...groupByFields) {  // Rest for flexible grouping
    const {
      startDate,
      endDate,
      categories,
      regions,
      ...additionalFilters  // Rest for additional filter parameters
    } = filters;

    // Base match stage
    const matchStage = {
      $match: {
        createdAt: {
          $gte: startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          $lte: endDate || new Date()
        },
        // Spread additional filters
        ...additionalFilters
      }
    };

    // Add array filters if provided
    if (categories?.length > 0) {
      matchStage.$match.category = { $in: categories };
    }
    if (regions?.length > 0) {
      matchStage.$match.region = { $in: regions };
    }

    // Dynamic grouping based on fields
    const groupId = groupByFields.reduce((acc, field) => {
      acc[field] = `$${field}`;
      return acc;
    }, {});

    const pipeline = [
      matchStage,
      {
        $group: {
          _id: groupByFields.length > 0 ? groupId : null,
          totalSales: { $sum: '$amount' },
          orderCount: { $sum: 1 },
          avgOrderValue: { $avg: '$amount' },
          uniqueCustomers: { $addToSet: '$customerId' }
        }
      },
      {
        $project: {
          ...Object.keys(groupId).reduce((acc, key) => {
            acc[key] = `$_id.${key}`;
            return acc;
          }, {}),
          totalSales: 1,
          orderCount: 1,
          avgOrderValue: { $round: ['$avgOrderValue', 2] },
          uniqueCustomerCount: { $size: '$uniqueCustomers' }
        }
      },
      { $sort: { totalSales: -1 } }
    ];

    return this.db.collection('orders').aggregate(pipeline).toArray();
  }

  // Bulk operations with spread
  async updateMultipleDocuments(collection, updates, ...options) {  // Rest for MongoDB options
    const bulkOps = updates.map(update => {
      const { filter, data, upsert = false, ...updateOptions } = update;
      
      return {
        updateOne: {
          filter,
          update: { 
            $set: { ...data },  // Spread update data
            $setOnInsert: {
              createdAt: new Date(),
              version: 1
            }
          },
          upsert,
          ...updateOptions  // Spread additional options
        }
      };
    });

    const operationOptions = options.reduce((acc, option) => ({ ...acc, ...option }), {});
    
    return this.db.collection(collection).bulkWrite(bulkOps, {
      ordered: false,
      ...operationOptions  // Spread operation options
    });
  }

  // Data transformation and cleanup
  async migrateDocuments(collection, transformer, batchSize = 1000, ...processingOptions) {
    const options = processingOptions.reduce((acc, opt) => ({ ...acc, ...opt }), {});
    const { 
      dryRun = false, 
      validateResult = false,
      ...otherOptions 
    } = options;

    let processed = 0;
    let cursor = this.db.collection(collection).find({});
    
    while (await cursor.hasNext()) {
      const batch = [];
      
      // Collect batch
      for (let i = 0; i < batchSize && await cursor.hasNext(); i++) {
        const doc = await cursor.next();
        batch.push(doc);
      }

      // Transform documents
      const transformedBatch = batch.map(doc => {
        const { _id, ...docData } = doc;  // Rest to separate ID from data
        const transformed = transformer(docData, doc);  // Pass both cleaned and original
        
        return {
          _id,
          ...transformed,  // Spread transformed data
          migratedAt: new Date(),
          originalVersion: doc.version || 1
        };
      });

      if (!dryRun) {
        // Bulk update
        const bulkOps = transformedBatch.map(doc => ({
          replaceOne: {
            filter: { _id: doc._id },
            replacement: {
              ...doc,  // Spread transformed document
              updatedAt: new Date()
            }
          }
        }));

        await this.db.collection(collection).bulkWrite(bulkOps, otherOptions);
      }

      processed += batch.length;
      console.log(`Processed ${processed} documents...`);
    }

    return { processed, dryRun };
  }

  // Complex query builder with dynamic conditions
  buildComplexQuery(baseQuery = {}, ...conditions) {  // Rest for multiple conditions
    return conditions.reduce((query, condition) => {
      const { type, field, value, operator = '$eq', ...conditionOptions } = condition;
      
      switch (type) {
        case 'range':
          const { min, max } = value;
          return {
            ...query,
            [field]: {
              ...(query[field] || {}),
              ...(min !== undefined && { $gte: min }),
              ...(max !== undefined && { $lte: max })
            }
          };
          
        case 'array':
          return {
            ...query,
            [field]: { [operator]: value }
          };
          
        case 'nested':
          const nestedQuery = Object.entries(value).reduce((acc, [nestedField, nestedValue]) => {
            acc[`${field}.${nestedField}`] = nestedValue;
            return acc;
          }, {});
          return { ...query, ...nestedQuery };
          
        default:
          return {
            ...query,
            [field]: { [operator]: value, ...conditionOptions }
          };
      }
    }, { ...baseQuery });  // Spread base query
  }
}

// Usage examples
const dbAggregator = new DatabaseAggregation(database);

// Complex sales analytics
const salesData = await dbAggregator.buildSalesAnalytics(
  {
    startDate: new Date('2024-01-01'),
    categories: ['electronics', 'clothing'],
    status: 'completed'
  },
  'region',
  'category',
  'month'
);

// Bulk document updates
const updates = [
  { filter: { userId: 'user1' }, data: { lastActive: new Date(), status: 'active' } },
  { filter: { userId: 'user2' }, data: { lastActive: new Date(), status: 'active' } }
];

await dbAggregator.updateMultipleDocuments('users', updates, 
  { ordered: true },
  { writeConcern: { w: 'majority' } }
);

// Complex query building
const query = dbAggregator.buildComplexQuery(
  { status: 'active' },  // Base query
  { type: 'range', field: 'age', value: { min: 18, max: 65 } },
  { type: 'array', field: 'tags', value: ['premium', 'vip'], operator: '$in' },
  { type: 'nested', field: 'address', value: { country: 'US', state: 'CA' } }
);
```

## Error Handling & Logging

### Centralized Error Management System
```javascript
// services/errorHandler.js - Enterprise error handling
class ErrorHandler {
  constructor(logger, notificationService) {
    this.logger = logger;
    this.notificationService = notificationService;
    this.errorMap = new Map();
  }

  // Register error transformers
  registerErrorTransformers(...transformers) {  // Rest for multiple transformers
    transformers.forEach(transformer => {
      const { errorType, handler, ...options } = transformer;
      this.errorMap.set(errorType, { handler, options });
    });
  }

  // Process and transform errors
  async handleError(error, context = {}, ...additionalContext) {  // Rest for flexible context
    const {
      request,
      user,
      operation,
      ...baseContext  // Rest to separate known context from additional data
    } = context;

    // Merge all context data
    const fullContext = {
      ...baseContext,
      // Spread additional context objects
      ...additionalContext.reduce((acc, ctx) => ({ ...acc, ...ctx }), {}),
      timestamp: new Date().toISOString(),
      requestId: request?.id || this.generateRequestId()
    };

    // Extract error details
    const {
      name,
      message,
      stack,
      code,
      statusCode,
      ...errorMetadata  // Rest for additional error properties
    } = error;

    // Build error object
    const processedError = {
      type: name || 'UnknownError',
      message,
      code: code || statusCode || 'UNKNOWN',
      stack: this.sanitizeStack(stack),
      context: fullContext,
      metadata: {
        ...errorMetadata,  // Spread original error metadata
        severity: this.calculateSeverity(error, fullContext),
        category: this.categorizeError(error)
      }
    };

    // Apply registered transformers
    const transformer = this.errorMap.get(processedError.type);
    if (transformer) {
      const transformedError = await transformer.handler(processedError, {
        ...transformer.options,
        ...fullContext
      });
      Object.assign(processedError, transformedError);
    }

    // Log error
    await this.logError(processedError);

    // Send notifications for critical errors
    if (processedError.metadata.severity === 'critical') {
      await this.notificationService.sendAlert({
        ...processedError,
        recipients: this.getAlertRecipients(processedError)
      });
    }

    return processedError;
  }

  // Batch error processing
  async handleMultipleErrors(errors, sharedContext = {}, ...processingOptions) {
    const options = processingOptions.reduce((acc, opt) => ({ ...acc, ...opt }), {});
    const {
      parallel = true,
      stopOnCritical = false,
      maxConcurrency = 5,
      ...otherOptions
    } = options;

    const processError = async (error, index) => {
      const errorContext = {
        ...sharedContext,
        batchIndex: index,
        batchSize: errors.length
      };

      const processed = await this.handleError(error, errorContext, otherOptions);
      
      if (stopOnCritical && processed.metadata.severity === 'critical') {
        throw new Error(`Critical error in batch at index ${index}: ${processed.message}`);
      }
      
      return processed;
    };

    if (parallel) {
      // Process errors in parallel with concurrency limit
      const results = [];
      for (let i = 0; i < errors.length; i += maxConcurrency) {
        const batch = errors.slice(i, i + maxConcurrency);
        const batchPromises = batch.map((error, batchIndex) => 
          processError(error, i + batchIndex)
        );
        
        const batchResults = await Promise.allSettled(batchPromises);
        results.push(...batchResults);
      }
      
      return results;
    } else {
      // Process errors sequentially
      const results = [];
      for (let i = 0; i < errors.length; i++) {
        try {
          const result = await processError(errors[i], i);
          results.push({ status: 'fulfilled', value: result });
        } catch (error) {
          results.push({ status: 'rejected', reason: error });
          if (stopOnCritical) break;
        }
      }
      
      return results;
    }
  }

  // Error aggregation and reporting
  async generateErrorReport(timeRange, ...filters) {  // Rest for multiple filter criteria
    const { startDate, endDate } = timeRange;
    
    const filterCriteria = filters.reduce((acc, filter) => {
      const { type, field, value, ...filterOptions } = filter;
      
      switch (type) {
        case 'severity':
          acc.push({ 'metadata.severity': value });
          break;
        case 'category':
          acc.push({ 'metadata.category': { $in: Array.isArray(value) ? value : [value] } });
          break;
        case 'user':
          acc.push({ 'context.user.id': value });
          break;
        case 'operation':
          acc.push({ 'context.operation': value });
          break;
        default:
          if (field && value !== undefined) {
            acc.push({ [field]: value });
          }
      }
      
      return acc;
    }, []);

    const pipeline = [
      {
        $match: {
          timestamp: { $gte: startDate, $lte: endDate },
          ...(filterCriteria.length > 0 && { $and: filterCriteria })
        }
      },
      {
        $group: {
          _id: {
            type: '$type',
            severity: '$metadata.severity',
            category: '$metadata.category'
          },
          count: { $sum: 1 },
          lastOccurrence: { $max: '$timestamp' },
          affectedUsers: { $addToSet: '$context.user.id' },
          operations: { $addToSet: '$context.operation' },
          avgResolutionTime: { $avg: '$metadata.resolutionTime' }
        }
      },
      {
        $project: {
          errorType: '$_id.type',
          severity: '$_id.severity',
          category: '$_id.category',
          count: 1,
          lastOccurrence: 1,
          uniqueUsers: { $size: '$affectedUsers' },
          uniqueOperations: { $size: '$operations' },
          avgResolutionTime: { $ifNull: ['$avgResolutionTime', 0] }
        }
      },
      { $sort: { count: -1 } }
    ];

    const errorStats = await this.logger.aggregateErrors(pipeline);
    
    return {
      timeRange,
      totalErrors: errorStats.reduce((sum, stat) => sum + stat.count, 0),
      errorBreakdown: errorStats,
      filters: filters.map(filter => {
        const { ...filterData } = filter;  // Rest to copy filter
        return filterData;
      })
    };
  }

  // Utility methods
  calculateSeverity(error, context) {
    const { statusCode, code } = error;
    const { operation, user } = context;
    
    // Critical: System failures, security issues
    if (statusCode >= 500 || ['SYSTEM_FAILURE', 'SECURITY_VIOLATION'].includes(code)) {
      return 'critical';
    }
    
    // High: User-facing errors in critical operations
    if (['payment', 'authentication', 'data_loss'].includes(operation)) {
      return 'high';
    }
    
    // Medium: Regular application errors
    if (statusCode >= 400) {
      return 'medium';
    }
    
    return 'low';
  }

  categorizeError(error) {
    const errorCategories = {
      'ValidationError': 'validation',
      'AuthenticationError': 'security',
      'AuthorizationError': 'security',
      'DatabaseError': 'infrastructure',
      'NetworkError': 'infrastructure',
      'TimeoutError': 'performance',
      'RateLimitError': 'throttling'
    };

    return errorCategories[error.name] || 'application';
  }

  sanitizeStack(stack) {
    if (!stack) return null;
    
    // Remove sensitive paths and information
    return stack
      .split('\n')
      .map(line => line.replace(/\/home\/[^\/]+/g, '/home/[user]'))
      .map(line => line.replace(/password=[\w]+/g, 'password=[REDACTED]'))
      .join('\n');
  }

  generateRequestId() {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getAlertRecipients(error) {
    const { severity, category } = error.metadata;
    
    const recipients = ['ops-team@company.com'];
    
    if (severity === 'critical') {
      recipients.push('cto@company.com', 'on-call@company.com');
    }
    
    if (category === 'security') {
      recipients.push('security-team@company.com');
    }
    
    return [...new Set(recipients)];  // Remove duplicates with spread
  }
}

// Usage
const errorHandler = new ErrorHandler(logger, notificationService);

// Register error transformers
errorHandler.registerErrorTransformers(
  {
    errorType: 'ValidationError',
    handler: (error, context) => ({
      ...error,
      userFriendlyMessage: 'Please check your input and try again',
      shouldRetry: false
    })
  },
  {
    errorType: 'NetworkError',
    handler: (error, context) => ({
      ...error,
      shouldRetry: true,
      retryAfter: 5000,
      maxRetries: 3
    }),
    timeout: 30000
  }
);

// Handle single error
try {
  // Some operation that might fail
  await riskyOperation();
} catch (error) {
  const processedError = await errorHandler.handleError(
    error,
    { operation: 'user_registration', user: currentUser },
    { ipAddress: req.ip },
    { userAgent: req.get('User-Agent') }
  );
  
  res.status(processedError.code).json({
    error: processedError.userFriendlyMessage || processedError.message,
    requestId: processedError.context.requestId
  });
}
```

## Performance Optimization

### Caching Strategy with Rest/Spread
```javascript
// services/cacheManager.js - Multi-layer caching system
class CacheManager {
  constructor(redisClient, memoryCache, options = {}) {
    this.redis = redisClient;
    this.memory = memoryCache;
    this.config = {
      defaultTTL: 3600,
      memoryTTL: 300,
      keyPrefix: 'app:cache:',
      ...options  // Spread user options
    };
  }

  // Multi-layer cache with flexible key generation
  async get(baseKey, ...keyParts) {  // Rest for dynamic key composition
    const cacheKey = this.buildKey(baseKey, ...keyParts);
    
    // Try memory cache first
    let result = this.memory.get(cacheKey);
    if (result !== undefined) {
      return {
        data: result,
        source: 'memory',
        key: cacheKey
      };
    }

    // Try Redis cache
    const redisResult = await this.redis.get(cacheKey);
    if (redisResult) {
      const parsed = JSON.parse(redisResult);
      
      // Store in memory cache for faster subsequent access
      this.memory.set(cacheKey, parsed, this.config.memoryTTL);
      
      return {
        data: parsed,
        source: 'redis',
        key: cacheKey
      };
    }

    return null;
  }

  // Set cache with flexible options
  async set(baseKey, value, options = {}, ...keyParts) {  // Rest for key parts
    const cacheKey = this.buildKey(baseKey, ...keyParts);
    const {
      ttl = this.config.defaultTTL,
      memoryTTL = this.config.memoryTTL,
      skipMemory = false,
      skipRedis = false,
      tags = [],
      ...otherOptions  // Rest for additional cache options
    } = options;

    const cacheData = {
      value,
      createdAt: Date.now(),
      ttl,
      tags: [...tags],  // Spread tags array
      ...otherOptions   // Include additional metadata
    };

    // Store in memory cache
    if (!skipMemory) {
      this.memory.set(cacheKey, cacheData.value, memoryTTL);
    }

    // Store in Redis cache
    if (!skipRedis) {
      await this.redis.setex(cacheKey, ttl, JSON.stringify(cacheData.value));
      
      // Store metadata for cache management
      if (tags.length > 0) {
        await this.tagCache(cacheKey, tags);
      }
    }

    return { key: cacheKey, ...cacheData };
  }

  // Batch cache operations
  async getMultiple(...cacheRequests) {  // Rest for multiple cache requests
    const results = await Promise.allSettled(
      cacheRequests.map(async (request) => {
        if (typeof request === 'string') {
          return this.get(request);
        }
        
        const { key, keyParts = [], ...options } = request;
        return this.get(key, ...keyParts);
      })
    );

    return results.reduce((acc, result, index) => {
      const originalRequest = cacheRequests[index];
      const requestKey = typeof originalRequest === 'string' 
        ? originalRequest 
        : originalRequest.key;
        
      acc[requestKey] = {
        success: result.status === 'fulfilled',
        data: result.status === 'fulfilled' ? result.value : null,
        error: result.status === 'rejected' ? result.reason : null
      };
      
      return acc;
    }, {});
  }

  async setMultiple(cacheEntries, globalOptions = {}, ...globalKeyParts) {  // Rest for global key parts
    const operations = cacheEntries.map(async (entry) => {
      const {
        key,
        value,
        keyParts = [],
        options = {},
        ...entryMetadata  // Rest for additional entry data
      } = entry;

      const mergedOptions = {
        ...globalOptions,  // Spread global options
        ...options,        // Override with entry-specific options
        ...entryMetadata   // Include entry metadata
      };

      const allKeyParts = [...globalKeyParts, ...keyParts];  // Spread both arrays
      
      return this.set(key, value, mergedOptions, ...allKeyParts);
    });

    return Promise.allSettled(operations);
  }

  // Cache invalidation with pattern matching
  async invalidate(pattern, ...tags) {  // Rest for multiple tags
    const invalidationTasks = [];

    // Pattern-based invalidation
    if (pattern) {
      const keys = await this.redis.keys(`${this.config.keyPrefix}${pattern}`);
      if (keys.length > 0) {
        invalidationTasks.push(
          this.redis.del(...keys),  // Spread keys for deletion
          this.memory.clear(keys)
        );
      }
    }

    // Tag-based invalidation
    if (tags.length > 0) {
      for (const tag of tags) {
        const taggedKeys = await this.getKeysByTag(tag);
        if (taggedKeys.length > 0) {
          invalidationTasks.push(
            this.redis.del(...taggedKeys),  // Spread tagged keys
            this.memory.clear(taggedKeys)
          );
        }
      }
    }

    return Promise.all(invalidationTasks);
  }

  // Build cache key from parts
  buildKey(baseKey, ...parts) {  // Rest for flexible key building
    const keyParts = [this.config.keyPrefix, baseKey, ...parts.filter(Boolean)];
    return keyParts.join(':');
  }

  // Tag management
  async tagCache(cacheKey, tags) {
    const tagOperations = tags.map(tag => 
      this.redis.sadd(`tag:${tag}`, cacheKey)
    );
    
    return Promise.all(tagOperations);
  }

  async getKeysByTag(tag) {
    return this.redis.smembers(`tag:${tag}`);
  }

  // Cache warming with dependency resolution
  async warmCache(warmupConfig, ...dependencies) {  // Rest for dependencies
    const { 
      strategies,
      parallel = true,
      maxConcurrency = 10,
      ...config 
    } = warmupConfig;

    // Resolve dependencies first
    const resolvedDeps = {};
    if (dependencies.length > 0) {
      const depPromises = dependencies.map(async (dep) => {
        const { name, resolver, ...depConfig } = dep;
        const result = await resolver(depConfig);
        return { [name]: result };
      });
      
      const depResults = await Promise.all(depPromises);
      Object.assign(resolvedDeps, ...depResults);  // Spread all dependency results
    }

    // Execute warmup strategies
    const executeStrategy = async (strategy) => {
      const { 
        name, 
        dataSource, 
        cacheKeyGenerator, 
        transformer,
        ...strategyConfig 
      } = strategy;

      const data = await dataSource({ ...resolvedDeps, ...strategyConfig });
      
      const cacheOperations = data.map(async (item) => {
        const { keyParts, value, ...itemMeta } = transformer ? transformer(item) : item;
        
        const cacheKey = cacheKeyGenerator 
          ? cacheKeyGenerator(item, resolvedDeps)
          : this.buildKey(name, ...keyParts);

        return this.set(cacheKey, value, {
          ...config,
          ...itemMeta,
          tags: [`warmup:${name}`, ...(itemMeta.tags || [])]
        });
      });

      if (parallel && cacheOperations.length > maxConcurrency) {
        // Process in batches
        const results = [];
        for (let i = 0; i < cacheOperations.length; i += maxConcurrency) {
          const batch = cacheOperations.slice(i, i + maxConcurrency);
          const batchResults = await Promise.allSettled(batch);
          results.push(...batchResults);
        }
        return results;
      } else {
        return Promise.allSettled(cacheOperations);
      }
    };

    if (parallel) {
      return Promise.allSettled(strategies.map(executeStrategy));
    } else {
      const results = [];
      for (const strategy of strategies) {
        results.push(await executeStrategy(strategy));
      }
      return results;
    }
  }
}

// Usage examples
const cacheManager = new CacheManager(redisClient, memoryCache, {
  keyPrefix: 'ecommerce:',
  defaultTTL: 7200
});

// Single cache operations with dynamic keys
const userData = await cacheManager.get('user', userId, 'profile');
await cacheManager.set('user', userProfile, 
  { ttl: 3600, tags: ['user-data', 'profile'] }, 
  userId, 
  'profile'
);

// Batch operations
const cacheResults = await cacheManager.getMultiple(
  'global:config',
  { key: 'user', keyParts: [userId, 'preferences'] },
  { key: 'product', keyParts: [productId, 'details'] }
);

const batchSetResult = await cacheManager.setMultiple([
  {
    key: 'product',
    value: productData,
    keyParts: [productId],
    options: { ttl: 1800, tags: ['products'] }
  },
  {
    key: 'inventory',
    value: inventoryData,
    keyParts: [productId],
    options: { ttl: 300, tags: ['inventory', 'products'] }
  }
], 
{ tags: ['batch-update'] },  // Global options
'store', storeId  // Global key parts
);

// Cache warming for application startup
const warmupResult = await cacheManager.warmCache(
  {
    strategies: [
      {
        name: 'popular-products',
        dataSource: async (deps) => productService.getPopular(deps.storeConfig),
        transformer: (product) => ({
          keyParts: [product.id],
          value: product,
          ttl: 3600
        })
      },
      {
        name: 'user-preferences',
        dataSource: async (deps) => userService.getActiveUsers(deps.userConfig),
        cacheKeyGenerator: (user) => cacheManager.buildKey('user', user.id, 'preferences')
      }
    ],
    parallel: true,
    maxConcurrency: 20
  },
  // Dependencies
  { 
    name: 'storeConfig', 
    resolver: async () => configService.getStoreConfig() 
  },
  { 
    name: 'userConfig', 
    resolver: async () => configService.getUserConfig() 
  }
);

// Cache invalidation
await cacheManager.invalidate('user:*', 'user-data', 'profile');
```

## Summary

These technical examples demonstrate how Rest and Spread operators become essential tools in large applications for:

### **Key Benefits in Enterprise Applications:**

1. **State Management**: Immutable updates without mutation
2. **API Integration**: Flexible parameter handling and data transformation
3. **Component Architecture**: Clean prop passing and composition
4. **Configuration Management**: Dynamic environment and feature management
5. **Middleware Systems**: Flexible plugin architectures
6. **Database Operations**: Dynamic query building and bulk operations
7. **Error Handling**: Comprehensive error context and batch processing
8. **Performance Optimization**: Efficient caching and data manipulation

### **Technical Advantages:**

- **Memory Efficiency**: Shallow copying instead of deep cloning
- **Code Readability**: Clear intent in data manipulation
- **Maintainability**: Easier to modify and extend
- **Type Safety**: Better TypeScript integration
- **Performance**: Optimized by JavaScript engines
- **Flexibility**: Dynamic parameter handling

### **Best Practices in Large Applications:**

1. Use Rest for extracting specific data while preserving the remainder
2. Use Spread for merging configurations and options
3. Combine both for flexible API designs
4. Leverage for immutable state updates
5. Apply in middleware and plugin architectures
6. Use for dynamic database query building
7. Implement in error handling for context preservation
8. Apply in caching systems for flexible key management

These patterns scale effectively from small utilities to enterprise-level applications, providing clean, maintainable, and performant solutions.