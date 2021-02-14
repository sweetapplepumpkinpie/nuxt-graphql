'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    findOne(params, populate) {
        return strapi.query('category').findOne({ id: params.id }, populate);
    },
};
