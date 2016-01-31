function exportFileToSVG(doc, dest) {
    var exportOptions = new ExportOptionsSVG();
    var type = ExportType.SVG;
    var fileSpec = new File(dest);
    exportOptions.embedRasterImages = true;
    exportOptions.embedAllFonts = false;
    exportOptions.fontSubsetting = SVGFontSubsetting.GLYPHSUSED;
    doc.exportFile( fileSpec, type, exportOptions );
}

(function() {
    var i, doc, docPath, svgPath;

    for (i = 0; i < app.documents.length; i++) {
        doc = app.documents[i];
        if (doc.name.indexOf('名称未設定') >= 0) continue;

        if (doc.fullName == null || doc.fullName.fsName.indexOf('documents') == -1) continue;

        docPath = doc.fullName.fsName;
        svgPath = docPath.replace(/\.ai$/, ".svg");
        if (docPath == svgPath) continue;

        exportFileToSVG(doc, svgPath);
        doc.saveAs(new File(docPath));
    }
})();

// alert($.fileName)
