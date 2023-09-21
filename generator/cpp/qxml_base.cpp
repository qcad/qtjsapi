

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qxml_base.h"
  //#include "qxml_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QXmlDefaultHandler

    // constructors:
    
  // Class: QXmlDefaultHandler
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      void QXmlDefaultHandler_Base::setDocumentLocator(
      QXmlLocator* locator
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::setDocumentLocator()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("setDocumentLocator");
      QJSValue f = self.property("setDocumentLocator");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QXmlLocator(
    handler, 
    // non-copyable: false
locator
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.setDocumentLocator();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setDocumentLocator.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling setDocumentLocator:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::setDocumentLocator:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::setDocumentLocator"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::setDocumentLocator(
            locator
          );
        
    }

  bool QXmlDefaultHandler_Base::startDocument(
      
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::startDocument()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("startDocument");
      QJSValue f = self.property("startDocument");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.startDocument();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.startDocument.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling startDocument:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::startDocument:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::startDocument"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::startDocument(
            
          );
        
    }

  bool QXmlDefaultHandler_Base::endDocument(
      
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::endDocument()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("endDocument");
      QJSValue f = self.property("endDocument");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.endDocument();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.endDocument.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling endDocument:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::endDocument:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::endDocument"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::endDocument(
            
          );
        
    }

  bool QXmlDefaultHandler_Base::startPrefixMapping(
      const QString& prefix, const QString& uri
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::startPrefixMapping()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("startPrefixMapping");
      QJSValue f = self.property("startPrefixMapping");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
prefix
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
uri
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.startPrefixMapping();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.startPrefixMapping.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling startPrefixMapping:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::startPrefixMapping:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::startPrefixMapping"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::startPrefixMapping(
            prefix, uri
          );
        
    }

  bool QXmlDefaultHandler_Base::endPrefixMapping(
      const QString& prefix
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::endPrefixMapping()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("endPrefixMapping");
      QJSValue f = self.property("endPrefixMapping");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
prefix
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.endPrefixMapping();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.endPrefixMapping.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling endPrefixMapping:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::endPrefixMapping:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::endPrefixMapping"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::endPrefixMapping(
            prefix
          );
        
    }

  bool QXmlDefaultHandler_Base::startElement(
      const QString& namespaceURI, const QString& localName, const QString& qName, const QXmlAttributes& atts
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::startElement()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("startElement");
      QJSValue f = self.property("startElement");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
namespaceURI
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
localName
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
qName
  );


  args << cpp2js_QXmlAttributes(
    handler, 
    // non-copyable: false
atts
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.startElement();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.startElement.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling startElement:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::startElement:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::startElement"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::startElement(
            namespaceURI, localName, qName, atts
          );
        
    }

  bool QXmlDefaultHandler_Base::endElement(
      const QString& namespaceURI, const QString& localName, const QString& qName
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::endElement()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("endElement");
      QJSValue f = self.property("endElement");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
namespaceURI
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
localName
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
qName
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.endElement();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.endElement.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling endElement:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::endElement:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::endElement"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::endElement(
            namespaceURI, localName, qName
          );
        
    }

  bool QXmlDefaultHandler_Base::characters(
      const QString& ch
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::characters()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("characters");
      QJSValue f = self.property("characters");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
ch
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.characters();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.characters.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling characters:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::characters:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::characters"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::characters(
            ch
          );
        
    }

  bool QXmlDefaultHandler_Base::ignorableWhitespace(
      const QString& ch
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::ignorableWhitespace()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("ignorableWhitespace");
      QJSValue f = self.property("ignorableWhitespace");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
ch
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.ignorableWhitespace();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.ignorableWhitespace.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling ignorableWhitespace:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::ignorableWhitespace:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::ignorableWhitespace"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::ignorableWhitespace(
            ch
          );
        
    }

  bool QXmlDefaultHandler_Base::processingInstruction(
      const QString& target, const QString& data
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::processingInstruction()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("processingInstruction");
      QJSValue f = self.property("processingInstruction");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
target
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
data
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.processingInstruction();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.processingInstruction.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling processingInstruction:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::processingInstruction:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::processingInstruction"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::processingInstruction(
            target, data
          );
        
    }

  bool QXmlDefaultHandler_Base::skippedEntity(
      const QString& name
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::skippedEntity()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("skippedEntity");
      QJSValue f = self.property("skippedEntity");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
name
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.skippedEntity();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.skippedEntity.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling skippedEntity:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::skippedEntity:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::skippedEntity"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::skippedEntity(
            name
          );
        
    }

  bool QXmlDefaultHandler_Base::notationDecl(
      const QString& name, const QString& publicId, const QString& systemId
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::notationDecl()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("notationDecl");
      QJSValue f = self.property("notationDecl");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
name
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
publicId
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
systemId
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.notationDecl();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.notationDecl.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling notationDecl:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::notationDecl:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::notationDecl"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::notationDecl(
            name, publicId, systemId
          );
        
    }

  bool QXmlDefaultHandler_Base::unparsedEntityDecl(
      const QString& name, const QString& publicId, const QString& systemId, const QString& notationName
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::unparsedEntityDecl()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("unparsedEntityDecl");
      QJSValue f = self.property("unparsedEntityDecl");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
name
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
publicId
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
systemId
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
notationName
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.unparsedEntityDecl();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.unparsedEntityDecl.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling unparsedEntityDecl:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::unparsedEntityDecl:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::unparsedEntityDecl"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::unparsedEntityDecl(
            name, publicId, systemId, notationName
          );
        
    }

  bool QXmlDefaultHandler_Base::startDTD(
      const QString& name, const QString& publicId, const QString& systemId
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::startDTD()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("startDTD");
      QJSValue f = self.property("startDTD");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
name
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
publicId
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
systemId
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.startDTD();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.startDTD.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling startDTD:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::startDTD:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::startDTD"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::startDTD(
            name, publicId, systemId
          );
        
    }

  bool QXmlDefaultHandler_Base::endDTD(
      
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::endDTD()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("endDTD");
      QJSValue f = self.property("endDTD");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.endDTD();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.endDTD.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling endDTD:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::endDTD:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::endDTD"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::endDTD(
            
          );
        
    }

  bool QXmlDefaultHandler_Base::startEntity(
      const QString& name
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::startEntity()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("startEntity");
      QJSValue f = self.property("startEntity");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
name
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.startEntity();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.startEntity.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling startEntity:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::startEntity:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::startEntity"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::startEntity(
            name
          );
        
    }

  bool QXmlDefaultHandler_Base::endEntity(
      const QString& name
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::endEntity()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("endEntity");
      QJSValue f = self.property("endEntity");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
name
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.endEntity();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.endEntity.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling endEntity:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::endEntity:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::endEntity"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::endEntity(
            name
          );
        
    }

  bool QXmlDefaultHandler_Base::startCDATA(
      
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::startCDATA()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("startCDATA");
      QJSValue f = self.property("startCDATA");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.startCDATA();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.startCDATA.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling startCDATA:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::startCDATA:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::startCDATA"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::startCDATA(
            
          );
        
    }

  bool QXmlDefaultHandler_Base::endCDATA(
      
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::endCDATA()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("endCDATA");
      QJSValue f = self.property("endCDATA");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.endCDATA();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.endCDATA.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling endCDATA:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::endCDATA:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::endCDATA"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::endCDATA(
            
          );
        
    }

  bool QXmlDefaultHandler_Base::comment(
      const QString& ch
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::comment()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("comment");
      QJSValue f = self.property("comment");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
ch
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.comment();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.comment.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling comment:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::comment:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::comment"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::comment(
            ch
          );
        
    }

  bool QXmlDefaultHandler_Base::attributeDecl(
      const QString& eName, const QString& aName, const QString& type, const QString& valueDefault, const QString& value
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::attributeDecl()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("attributeDecl");
      QJSValue f = self.property("attributeDecl");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
eName
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
aName
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
type
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
valueDefault
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
value
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.attributeDecl();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.attributeDecl.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling attributeDecl:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::attributeDecl:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::attributeDecl"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::attributeDecl(
            eName, aName, type, valueDefault, value
          );
        
    }

  bool QXmlDefaultHandler_Base::internalEntityDecl(
      const QString& name, const QString& value
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::internalEntityDecl()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("internalEntityDecl");
      QJSValue f = self.property("internalEntityDecl");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
name
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
value
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.internalEntityDecl();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.internalEntityDecl.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling internalEntityDecl:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::internalEntityDecl:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::internalEntityDecl"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::internalEntityDecl(
            name, value
          );
        
    }

  bool QXmlDefaultHandler_Base::externalEntityDecl(
      const QString& name, const QString& publicId, const QString& systemId
    ) 
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::externalEntityDecl()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("externalEntityDecl");
      QJSValue f = self.property("externalEntityDecl");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QString(
    handler, 
    // non-copyable: false
name
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
publicId
  );


  args << cpp2js_QString(
    handler, 
    // non-copyable: false
systemId
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.externalEntityDecl();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.externalEntityDecl.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling externalEntityDecl:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::externalEntityDecl:" + res.toString());
        //}

        
            return js2cpp_bool(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::externalEntityDecl"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::externalEntityDecl(
            name, publicId, systemId
          );
        
    }

  QString QXmlDefaultHandler_Base::errorString(
      
    ) 
    
      const
    
    {

      //qDebug() << "QXmlDefaultHandler_Base::errorString()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("errorString");
      QJSValue f = self.property("errorString");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.errorString();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.errorString.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling errorString:" << res.toString();
        //  engine->throwError("exception in: QXmlDefaultHandler::errorString:" + res.toString());
        //}

        
            return js2cpp_QString(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QXmlDefaultHandler::errorString"));
      //}

      
          // call implementation of original class:
          return QXmlDefaultHandler::errorString(
            
          );
        
    }

  

      // public pure-virtual functions:
      
  // TODO: fix (warning)
  
  // TODO: fix (error)
  
  // TODO: fix (fatalError)
  