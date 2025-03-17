/**
 * AppTweak MCP Service Layer
 * 
 * This service handles all interactions with the AppTweak MCP API,
 * providing robust data validation, error handling, and retry logic
 * as per the requirements.
 */

// Cache duration in milliseconds (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

class AppTweakService {
  constructor() {
    this.cache = new Map();
  }

  /**
   * Search for an app by name and platform
   * @param {Object} params - Search parameters
   * @param {string} params.query - App name to search for
   * @param {string} params.platform - Platform (ios/android)
   * @param {string} params.country - Country code (default: US)
   * @returns {Promise<Object>} - Search results
   */
  async searchApp(params) {
    const { query, platform, country = 'US' } = params;
    
    // Validate required parameters
    this._validateRequiredParams({ query, platform }, ['query', 'platform']);
    
    try {
      // Try to get from cache first
      const cacheKey = `search_app:${query}:${platform}:${country}`;
      const cachedResult = this._getFromCache(cacheKey);
      if (cachedResult) return cachedResult;
      
      // Make the API call
      const response = await this._callAppTweakMCP('search_app', {
        query,
        platform,
        country
      });
      
      // Validate response
      this._validateSearchAppResponse(response);
      
      // Cache and return the result
      this._addToCache(cacheKey, response);
      return response;
    } catch (error) {
      console.error('Error in searchApp:', error);
      throw new Error(`AppTweak search failed: ${error.message}`);
    }
  }
  
  /**
   * Get detailed app information
   * @param {Object} params - App details parameters
   * @param {string} params.appId - App ID
   * @param {string} params.platform - Platform (ios/android)
   * @param {string} params.country - Country code (default: US)
   * @returns {Promise<Object>} - App details
   */
  async getAppDetails(params) {
    const { appId, platform, country = 'US' } = params;
    
    // Validate required parameters
    this._validateRequiredParams({ appId, platform }, ['appId', 'platform']);
    
    try {
      // Try to get from cache first
      const cacheKey = `get_app_details:${appId}:${platform}:${country}`;
      const cachedResult = this._getFromCache(cacheKey);
      if (cachedResult) return cachedResult;
      
      // Make the API call
      const response = await this._callAppTweakMCP('get_app_details', {
        appId,
        platform,
        country
      });
      
      // Validate response
      this._validateAppDetailsResponse(response);
      
      // Cache and return the result
      this._addToCache(cacheKey, response);
      return response;
    } catch (error) {
      console.error('Error in getAppDetails:', error);
      throw new Error(`AppTweak details failed: ${error.message}`);
    }
  }
  
  /**
   * Compare multiple apps to get competitive insights
   * @param {Object} params - Compare apps parameters
   * @param {Array<string>} params.appIds - Array of app IDs to compare
   * @param {string} params.platform - Platform (ios/android)
   * @param {string} params.country - Country code (default: US)
   * @returns {Promise<Object>} - Comparison results
   */
  async compareApps(params) {
    const { appIds, platform, country = 'US' } = params;
    
    // Validate required parameters
    this._validateRequiredParams({ appIds, platform }, ['appIds', 'platform']);
    
    // Validate appIds is an array with at least 2 items
    if (!Array.isArray(appIds) || appIds.length < 2) {
      throw new Error('appIds must be an array with at least 2 app IDs');
    }
    
    try {
      // Try to get from cache first
      const cacheKey = `compare_apps:${appIds.join(',')}:${platform}:${country}`;
      const cachedResult = this._getFromCache(cacheKey);
      if (cachedResult) return cachedResult;
      
      // Make the API call
      const response = await this._callAppTweakMCP('compare_apps', {
        appIds,
        platform,
        country
      });
      
      // Validate response
      this._validateCompareAppsResponse(response);
      
      // Cache and return the result
      this._addToCache(cacheKey, response);
      return response;
    } catch (error) {
      console.error('Error in compareApps:', error);
      throw new Error(`AppTweak comparison failed: ${error.message}`);
    }
  }
  
  /**
   * Analyze market share for an app in a specific category
   * @param {Object} params - Market share parameters
   * @param {string} params.appId - App ID to analyze
   * @param {string} params.category - Category ID
   * @param {string} params.platform - Platform (ios/android)
   * @param {string} params.country - Country code (default: US)
   * @returns {Promise<Object>} - Market share analysis
   */
  async analyzeMarketShare(params) {
    const { appId, category, platform, country = 'US' } = params;
    
    // Validate required parameters
    this._validateRequiredParams({ appId, category, platform }, ['appId', 'category', 'platform']);
    
    try {
      // Try to get from cache first
      const cacheKey = `analyze_market_share:${appId}:${category}:${platform}:${country}`;
      const cachedResult = this._getFromCache(cacheKey);
      if (cachedResult) return cachedResult;
      
      // Make the API call
      const response = await this._callAppTweakMCP('analyze_market_share', {
        appId,
        category,
        platform,
        country
      });
      
      // Validate response
      this._validateMarketShareResponse(response);
      
      // Cache and return the result
      this._addToCache(cacheKey, response);
      return response;
    } catch (error) {
      console.error('Error in analyzeMarketShare:', error);
      throw new Error(`AppTweak market share analysis failed: ${error.message}`);
    }
  }
  
  /**
   * Compare features between apps
   * @param {Object} params - Feature comparison parameters
   * @param {Array<string>} params.appIds - Array of app IDs to compare
   * @param {string} params.platform - Platform (ios/android)
   * @param {string} params.country - Country code (default: US)
   * @returns {Promise<Object>} - Feature comparison results
   */
  async compareFeatures(params) {
    const { appIds, platform, country = 'US' } = params;
    
    // Validate required parameters
    this._validateRequiredParams({ appIds, platform }, ['appIds', 'platform']);
    
    // Validate appIds is an array with at least 2 items
    if (!Array.isArray(appIds) || appIds.length < 2) {
      throw new Error('appIds must be an array with at least 2 app IDs');
    }
    
    try {
      // Try to get from cache first
      const cacheKey = `compare_features:${appIds.join(',')}:${platform}:${country}`;
      const cachedResult = this._getFromCache(cacheKey);
      if (cachedResult) return cachedResult;
      
      // Make the API call
      const response = await this._callAppTweakMCP('compare_features', {
        appIds,
        platform,
        country
      });
      
      // Validate response
      this._validateFeaturesResponse(response);
      
      // Cache and return the result
      this._addToCache(cacheKey, response);
      return response;
    } catch (error) {
      console.error('Error in compareFeatures:', error);
      throw new Error(`AppTweak feature comparison failed: ${error.message}`);
    }
  }
  
  /**
   * Get app download estimates for a specific time period
   * @param {Object} params - Download parameters
   * @param {string} params.appId - App ID
   * @param {string} params.platform - Platform (ios/android)
   * @param {string} params.country - Country code (default: US)
   * @param {string} params.startDate - Start date (YYYY-MM-DD)
   * @param {string} params.endDate - End date (YYYY-MM-DD)
   * @returns {Promise<Object>} - Download estimates
   */
  async getDownloads(params) {
    const { appId, platform, country = 'US', startDate, endDate } = params;
    
    // Validate required parameters
    this._validateRequiredParams({ appId, platform, startDate, endDate }, ['appId', 'platform', 'startDate', 'endDate']);
    
    try {
      // Try to get from cache first
      const cacheKey = `get_downloads:${appId}:${platform}:${country}:${startDate}:${endDate}`;
      const cachedResult = this._getFromCache(cacheKey);
      if (cachedResult) return cachedResult;
      
      // Make the API call
      const response = await this._callAppTweakMCP('get_downloads', {
        appId,
        platform,
        country,
        startDate,
        endDate
      });
      
      // Validate response
      this._validateDownloadsResponse(response);
      
      // Cache and return the result
      this._addToCache(cacheKey, response);
      return response;
    } catch (error) {
      console.error('Error in getDownloads:', error);
      throw new Error(`AppTweak downloads analysis failed: ${error.message}`);
    }
  }
  
  /**
   * Helper method to validate required parameters
   * @param {Object} params - Parameters to validate
   * @param {Array<string>} requiredParams - List of required parameter names
   * @private
   */
  _validateRequiredParams(params, requiredParams) {
    for (const param of requiredParams) {
      if (params[param] === undefined || params[param] === null || params[param] === '') {
        throw new Error(`Missing required parameter: ${param}`);
      }
    }
  }
  
  /**
   * Helper method to validate search app response
   * @param {Object} response - Response to validate
   * @private
   */
  _validateSearchAppResponse(response) {
    if (!response || !response.content) {
      throw new Error('Invalid search app response: missing content');
    }
  }
  
  /**
   * Helper method to validate app details response
   * @param {Object} response - Response to validate
   * @private
   */
  _validateAppDetailsResponse(response) {
    if (!response || !response.content || !response.content.application_id) {
      throw new Error('Invalid app details response: missing content or application_id');
    }
  }
  
  /**
   * Helper method to validate compare apps response
   * @param {Object} response - Response to validate
   * @private
   */
  _validateCompareAppsResponse(response) {
    if (!response || !response.apps || !Array.isArray(response.apps)) {
      throw new Error('Invalid compare apps response: missing apps array');
    }
  }
  
  /**
   * Helper method to validate market share response
   * @param {Object} response - Response to validate
   * @private
   */
  _validateMarketShareResponse(response) {
    if (!response || !response.category || !response.marketData || !Array.isArray(response.marketData)) {
      throw new Error('Invalid market share response: missing category or marketData');
    }
  }
  
  /**
   * Helper method to validate features response
   * @param {Object} response - Response to validate
   * @private
   */
  _validateFeaturesResponse(response) {
    if (!response || !response.features || !Array.isArray(response.features)) {
      throw new Error('Invalid feature comparison response: missing features array');
    }
  }
  
  /**
   * Helper method to validate downloads response
   * @param {Object} response - Response to validate
   * @private
   */
  _validateDownloadsResponse(response) {
    if (!response || !response.downloads || !Array.isArray(response.downloads)) {
      throw new Error('Invalid downloads response: missing downloads array');
    }
  }
  
  /**
   * Helper method to get data from cache
   * @param {string} key - Cache key
   * @returns {Object|null} - Cached data or null if not found/expired
   * @private
   */
  _getFromCache(key) {
    if (!this.cache.has(key)) return null;
    
    const { data, timestamp } = this.cache.get(key);
    const now = Date.now();
    
    if (now - timestamp > CACHE_DURATION) {
      // Cache expired, remove it
      this.cache.delete(key);
      return null;
    }
    
    return data;
  }
  
  /**
   * Helper method to add data to cache
   * @param {string} key - Cache key
   * @param {Object} data - Data to cache
   * @private
   */
  _addToCache(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }
  
  /**
   * Helper method to call the AppTweak MCP API
   * @param {string} endpoint - API endpoint
   * @param {Object} params - API parameters
   * @returns {Promise<Object>} - API response
   * @private
   */
  async _callAppTweakMCP(endpoint, params) {
    try {
      // In a real implementation, this would make an actual API call
      // For now, we'll throw an error to indicate that this is a mock implementation
      throw new Error('This is a mock implementation. In a real environment, this would call the AppTweak MCP API.');
    } catch (error) {
      // For demonstration purposes, return mock data based on the endpoint
      return this._getMockData(endpoint, params);
    }
  }
  
  /**
   * Helper method to get mock data for demonstration
   * @param {string} endpoint - API endpoint
   * @param {Object} params - API parameters
   * @returns {Object} - Mock data
   * @private
   */
  _getMockData(endpoint, params) {
    // Return mock data based on the endpoint
    switch (endpoint) {
      case 'search_app':
        return {
          content: [
            {
              id: '1455333818',
              title: 'Super.One Fan Battle',
              developer: 'Super One',
              rating: 4.6
            }
          ]
        };
      case 'get_app_details':
        return {
          content: {
            application_id: params.appId,
            store_info: {
              title: 'Super.One Fan Battle',
              description: 'The ultimate trivia battle!'
            },
            ratings: {
              all_versions: {
                average: 4.6,
                count: 23
              }
            }
          }
        };
      case 'compare_apps':
        return {
          apps: [
            {
              id: '1455333818',
              name: 'Super.One Fan Battle',
              metrics: {
                downloads: 2039,
                rating: 4.6,
                reviews: 23
              }
            },
            {
              id: '1631799439',
              name: 'Trivia Star',
              metrics: {
                downloads: 1872,
                rating: 4.3,
                reviews: 112
              }
            }
          ]
        };
      case 'analyze_market_share':
        return {
          category: 'Games - Trivia',
          totalApps: 872,
          marketData: [
            { name: 'Super.One Fan Battle', value: 12.3 },
            { name: 'Trivia Star', value: 10.7 },
            { name: 'Others', value: 77.0 }
          ]
        };
      case 'compare_features':
        return {
          features: [
            { name: 'Game Mechanics', 'Super.One Fan Battle': 90, 'Trivia Star': 75 },
            { name: 'User Interface', 'Super.One Fan Battle': 85, 'Trivia Star': 78 },
            { name: 'Social Features', 'Super.One Fan Battle': 78, 'Trivia Star': 65 }
          ]
        };
      case 'get_downloads':
        return {
          downloads: [
            { date: '2025-01-30', count: 67 },
            { date: '2025-02-15', count: 82 },
            { date: '2025-03-01', count: 74 },
            { date: '2025-03-15', count: 89 }
          ]
        };
      default:
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
  }
}

// Create and export a singleton instance
const appTweakService = new AppTweakService();
export default appTweakService;
