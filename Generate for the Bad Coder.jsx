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
