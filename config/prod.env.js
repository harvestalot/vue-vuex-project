'use strict'
module.exports = {
  NODE_ENV: '"production"',
  API_PATH:'""',
  BRANCH_ENV: JSON.stringify(process.env.BRANCH_ENV) || '"base"',
  ignoreCsrfToken:'"false"'
}
