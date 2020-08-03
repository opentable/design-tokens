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
        convertPathData: false
      },
      {
        convertTransform: false
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
      // Note: This rule must be true so that ids are removed from the svgs. IDs are supposed to be globally unuiqe.
      // If we inline an svg with an id multiple times, then the id uniqueness rule will be broken.
      // If your svg internally references ids, update it so that it doesn't. if you MUST internally reference ids,
      // add the prefixIds rules and give us a really good explanation why your id couldn't be fixed or why you couldn't
      // use a very unique and specific class name instead
      {
        cleanupIDs: true
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
      },
      {
        addAttributesToSVGElement: {
          attributes: [
            {
              focusable: 'false'
            }
          ]
        }
      }
    ]
  }
};
