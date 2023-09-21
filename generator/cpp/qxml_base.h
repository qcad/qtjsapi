

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QXML_H_BASE
  #define QXML_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QXmlAttributes>
  
    #include <QXmlContentHandler>
  
    #include <QXmlDefaultHandler>
  
    #include <QXmlDTDHandler>
  
    #include <QXmlEntityResolver>
  
    #include <QXmlErrorHandler>
  
    #include <QXmlLexicalHandler>
  
    #include <QXmlDeclHandler>
  
    #include <QXmlInputSource>
  
    #include <QXmlLocator>
  
    #include <QXmlParseException>
  
    #include <QXmlReader>
  
    #include <QXmlSimpleReader>
  
    #include <QQmlEngine>

    
        #include <QXmlAttributes>
      
    #include <QQmlEngine>

    
        #include <QXmlInputSource>
      
    #include <QQmlEngine>

    
        #include <QXmlParseException>
      
    #include <QQmlEngine>

    
        #include <QXmlReader>
      
    #include <QQmlEngine>

    
        #include <QXmlSimpleReader>
      
    #include <QQmlEngine>

    
        #include <QXmlLocator>
      
    #include <QQmlEngine>

    
        #include <QXmlContentHandler>
      
    #include <QQmlEngine>

    
        #include <QXmlErrorHandler>
      
    #include <QQmlEngine>

    
        #include <QXmlDTDHandler>
      
    #include <QQmlEngine>

    
        #include <QXmlEntityResolver>
      
    #include <QQmlEngine>

    
        #include <QXmlLexicalHandler>
      
    #include <QQmlEngine>

    
        #include <QXmlDeclHandler>
      
    #include <QQmlEngine>

    
        #include <QXmlDefaultHandler>
      
    // Base class for QXmlDefaultHandler
      class QXmlDefaultHandler_Base : public QXmlDefaultHandler {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QXmlDefaultHandler
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1
QXmlDefaultHandler_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : QXmlDefaultHandler(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QXmlDefaultHandler_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void setDocumentLocator(
      QXmlLocator* locator
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void setDocumentLocatorSup(
        QXmlLocator* locator
      )
      
      {
        QXmlDefaultHandler::setDocumentLocator(
          locator
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool startDocument(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool startDocumentSup(
        
      )
      
      {
        
          return
        QXmlDefaultHandler::startDocument(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool endDocument(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool endDocumentSup(
        
      )
      
      {
        
          return
        QXmlDefaultHandler::endDocument(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool startPrefixMapping(
      const QString& prefix, const QString& uri
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool startPrefixMappingSup(
        const QString& prefix, const QString& uri
      )
      
      {
        
          return
        QXmlDefaultHandler::startPrefixMapping(
          prefix, uri
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool endPrefixMapping(
      const QString& prefix
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool endPrefixMappingSup(
        const QString& prefix
      )
      
      {
        
          return
        QXmlDefaultHandler::endPrefixMapping(
          prefix
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool startElement(
      const QString& namespaceURI, const QString& localName, const QString& qName, const QXmlAttributes& atts
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool startElementSup(
        const QString& namespaceURI, const QString& localName, const QString& qName, const QXmlAttributes& atts
      )
      
      {
        
          return
        QXmlDefaultHandler::startElement(
          namespaceURI, localName, qName, atts
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool endElement(
      const QString& namespaceURI, const QString& localName, const QString& qName
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool endElementSup(
        const QString& namespaceURI, const QString& localName, const QString& qName
      )
      
      {
        
          return
        QXmlDefaultHandler::endElement(
          namespaceURI, localName, qName
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool characters(
      const QString& ch
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool charactersSup(
        const QString& ch
      )
      
      {
        
          return
        QXmlDefaultHandler::characters(
          ch
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool ignorableWhitespace(
      const QString& ch
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool ignorableWhitespaceSup(
        const QString& ch
      )
      
      {
        
          return
        QXmlDefaultHandler::ignorableWhitespace(
          ch
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool processingInstruction(
      const QString& target, const QString& data
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool processingInstructionSup(
        const QString& target, const QString& data
      )
      
      {
        
          return
        QXmlDefaultHandler::processingInstruction(
          target, data
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool skippedEntity(
      const QString& name
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool skippedEntitySup(
        const QString& name
      )
      
      {
        
          return
        QXmlDefaultHandler::skippedEntity(
          name
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool notationDecl(
      const QString& name, const QString& publicId, const QString& systemId
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool notationDeclSup(
        const QString& name, const QString& publicId, const QString& systemId
      )
      
      {
        
          return
        QXmlDefaultHandler::notationDecl(
          name, publicId, systemId
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool unparsedEntityDecl(
      const QString& name, const QString& publicId, const QString& systemId, const QString& notationName
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool unparsedEntityDeclSup(
        const QString& name, const QString& publicId, const QString& systemId, const QString& notationName
      )
      
      {
        
          return
        QXmlDefaultHandler::unparsedEntityDecl(
          name, publicId, systemId, notationName
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool startDTD(
      const QString& name, const QString& publicId, const QString& systemId
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool startDTDSup(
        const QString& name, const QString& publicId, const QString& systemId
      )
      
      {
        
          return
        QXmlDefaultHandler::startDTD(
          name, publicId, systemId
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool endDTD(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool endDTDSup(
        
      )
      
      {
        
          return
        QXmlDefaultHandler::endDTD(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool startEntity(
      const QString& name
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool startEntitySup(
        const QString& name
      )
      
      {
        
          return
        QXmlDefaultHandler::startEntity(
          name
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool endEntity(
      const QString& name
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool endEntitySup(
        const QString& name
      )
      
      {
        
          return
        QXmlDefaultHandler::endEntity(
          name
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool startCDATA(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool startCDATASup(
        
      )
      
      {
        
          return
        QXmlDefaultHandler::startCDATA(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool endCDATA(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool endCDATASup(
        
      )
      
      {
        
          return
        QXmlDefaultHandler::endCDATA(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool comment(
      const QString& ch
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool commentSup(
        const QString& ch
      )
      
      {
        
          return
        QXmlDefaultHandler::comment(
          ch
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool attributeDecl(
      const QString& eName, const QString& aName, const QString& type, const QString& valueDefault, const QString& value
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool attributeDeclSup(
        const QString& eName, const QString& aName, const QString& type, const QString& valueDefault, const QString& value
      )
      
      {
        
          return
        QXmlDefaultHandler::attributeDecl(
          eName, aName, type, valueDefault, value
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool internalEntityDecl(
      const QString& name, const QString& value
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool internalEntityDeclSup(
        const QString& name, const QString& value
      )
      
      {
        
          return
        QXmlDefaultHandler::internalEntityDecl(
          name, value
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool externalEntityDecl(
      const QString& name, const QString& publicId, const QString& systemId
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool externalEntityDeclSup(
        const QString& name, const QString& publicId, const QString& systemId
      )
      
      {
        
          return
        QXmlDefaultHandler::externalEntityDecl(
          name, publicId, systemId
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual QString errorString(
      
    )
    
      const
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual QString errorStringSup(
        
      )
      
        const
      
      {
        
          return
        QXmlDefaultHandler::errorString(
          
        );
      }
    

      // public pure-virtual functions:
      
  // TODO: fix (warning)
  
  // TODO: fix (error)
  
  // TODO: fix (fatalError)
  

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  