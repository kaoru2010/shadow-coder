function exportFileToSVG(doc, dest) {
    var exportOptions = new ExportOptionsSVG();
    var type = ExportType.SVG;
    var fileSpec = new File(dest);
    exportOptions.DTD = SVGDTDVersion.SVG1_1; //SVGTINY1_2
    //exportOptions.DTD = SVGDTDVersion.SVGTINY1_2;
    exportOptions.documentEncoding = SVGDocumentEncoding.UTF8;
    exportOptions.embedRasterImages = true;
    exportOptions.embedAllFonts = false;
    exportOptions.cssProperties = SVGCSSPropertyLocation.PRESENTATIONATTRIBUTES;
    exportOptions.fontSubsetting = SVGFontSubsetting.None; //GLYPHSUSED;
    exportOptions.sVGTextOnPath = true;
    exportOptions.sVGAutoKerning = false; //true;
    doc.exportFile( fileSpec, type, exportOptions );
}

(function() {
    var i, doc, docPath, svgPath;

    if (0 < app.documents.length) {
        doc = app.activeDocument;
        if (doc.name.indexOf('名称未設定') >= 0) return;

        if (doc.fullName == null || doc.fullName.fsName.indexOf('/documents/') == -1) return;

        docPath = doc.fullName.fsName;
        svgPath = docPath.replace(/\.ai$/, ".svg");
        if (docPath == svgPath) return;

        exportFileToSVG(doc, svgPath);
        doc.saveAs(new File(docPath));
    }
})();

// alert($.fileName)
