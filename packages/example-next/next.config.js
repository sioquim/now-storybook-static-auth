const assetPrefix = process.env.BUILDING_FOR_NOW ? "/example" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix
  }
};
