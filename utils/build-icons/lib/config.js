module.exports = {
  iconSize: 24,
  svgo: {
    plugins: [
      {
        cleanupAttrs: true
      },
      {
        removeDoctype: true
      },
      {
        removeXMLProcInst: true
      },
      {
        removeComments: true
      },
      {
        removeMetadata: true
      },
      {
        removeTitle: true
      },
      {
        removeDesc: true
      },
      {
        removeUselessDefs: true
      },
      {
        removeEditorsNSData: true
      },
      {
        removeEmptyAttrs: true
      },
      {
        removeHiddenElems: true
      },
      {
        removeEmptyText: true
      },
      {
        removeEmptyContainers: true
      },
      {
        removeViewBox: false
      },
      {
        cleanUpEnableBackground: true
      },
      {
        convertStyleToAttrs: true
      },
      {
        convertColors: true
      },
      {
        convertPathData: true
      },
      {
        convertTransform: true
      },
      {
        removeUnknownsAndDefaults: true
      },
      {
        removeNonInheritableGroupAttrs: true
      },
      {
        removeUselessStrokeAndFill: true
      },
      {
        removeUnusedNS: true
      },
      {
        cleanupIDs: false
      },
      {
        cleanupNumericValues: true
      },
      {
        moveElemsAttrsToGroup: false
      },
      {
        moveGroupAttrsToElems: false
      },
      {
        collapseGroups: false
      },
      {
        removeRasterImages: false
      },
      {
        mergePaths: false
      },
      {
        convertShapeToPath: false
      },
      {
        sortAttrs: false
      },
      {
        transformsWithOnePath: false
      },
      {
        removeDimensions: true
      },
      {
        removeAttrs: false
      }
    ]
  }
};
