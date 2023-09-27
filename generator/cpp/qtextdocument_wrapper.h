
  // Auto generated
  
    #ifndef QTEXTDOCUMENT_H_WRAPPER
    #define QTEXTDOCUMENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QTextListFormat>
      
        #include <QRect>
      
        #include <QPainter>
      
        #include <QPagedPaintDevice>
      
        #include <QAbstractTextDocumentLayout>
      
        #include <QPoint>
      
        #include <QTextObject>
      
        #include <QTextFormat>
      
        #include <QTextFrame>
      
        #include <QTextBlock>
      
        #include <QVariant>
      
        #include <QRectF>
      
        #include <QTextOption>
      
        #include <QTextCursor>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QTextDocument>
      
      // wrapped object is QTextDocument_Base class if new object is created: 
      #include "qtextdocument_base.h"
    
      // singleton class wrapper for static functions:
      class QTextDocument_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QTextDocument_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QTextDocument
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tr
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_CSSPARSER

#endif

#ifndef QT_NO_TEXTHTMLPARSER

#endif

#if QT_CONFIG(textmarkdownwriter)||QT_CONFIG(textmarkdownreader)

#endif

#if QT_CONFIG(textmarkdownwriter)

#endif

#if QT_CONFIG(textmarkdownreader)

#endif

#if QT_CONFIG(regularexpression)

#endif

#ifndef QT_NO_PRINTER

#endif

#ifndef QT_NO_CSSPARSER

#endif


      private:
          RJSApi& handler;
          //static QTextDocument_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextDocument
    class QTextDocument_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )

  Q_PROPERTY(
    
    QJSValue
     modified READ isModified WRITE setModified
  )

  Q_PROPERTY(
    
    QJSValue
     pageSize READ pageSize WRITE setPageSize
  )

  Q_PROPERTY(
    
    QJSValue
     defaultFont READ defaultFont WRITE setDefaultFont
  )

  Q_PROPERTY(
    
    QJSValue
     useDesignMetrics READ useDesignMetrics WRITE setUseDesignMetrics
  )

  Q_PROPERTY(
    
    QJSValue
     size READ size
  )

  Q_PROPERTY(
    
    QJSValue
     textWidth READ textWidth WRITE setTextWidth
  )

  Q_PROPERTY(
    
    QJSValue
     blockCount READ blockCount
  )

  Q_PROPERTY(
    
    QJSValue
     indentWidth READ indentWidth WRITE setIndentWidth
  )

  Q_PROPERTY(
    
    QJSValue
     defaultStyleSheet READ defaultStyleSheet WRITE setDefaultStyleSheet
  )

  Q_PROPERTY(
    
    QJSValue
     maximumBlockCount READ maximumBlockCount WRITE setMaximumBlockCount
  )

  Q_PROPERTY(
    
    QJSValue
     documentMargin READ documentMargin WRITE setDocumentMargin
  )

  Q_PROPERTY(
    
    QJSValue
     baseUrl READ baseUrl WRITE setBaseUrl
  )


    private:
      // disable copy constructor:
      QTextDocument_Wrapper(const QTextDocument_Wrapper&);

    public:
      // initialization of QTextDocument:
      static void init(RJSApi& handler);

      
        static QTextDocument* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QTextDocument.length(); i++) {
            RJSBasecaster_QTextDocument* basecaster = basecasters_QTextDocument[i];
            QTextDocument* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QTextDocument::getIdStatic()) {
            return (QTextDocument*)vp;
          }

          qWarning() << "QTextDocument_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QTextDocument* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextDocument*: wrapper wraps NULL";
          }

          QTextDocument* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextDocument*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum MetaInformation {
    DocumentTitle = QTextDocument::DocumentTitle,
DocumentUrl = QTextDocument::DocumentUrl,

  };
  Q_ENUM(MetaInformation)

  enum MarkdownFeature {
    MarkdownNoHTML = QTextDocument::MarkdownNoHTML,
MarkdownDialectCommonMark = QTextDocument::MarkdownDialectCommonMark,
MarkdownDialectGitHub = QTextDocument::MarkdownDialectGitHub,

  };
  Q_ENUM(MarkdownFeature)

  enum FindFlag {
    FindBackward = QTextDocument::FindBackward,
FindCaseSensitively = QTextDocument::FindCaseSensitively,
FindWholeWords = QTextDocument::FindWholeWords,

  };
  Q_ENUM(FindFlag)

  enum ResourceType {
    UnknownResource = QTextDocument::UnknownResource,
HtmlResource = QTextDocument::HtmlResource,
ImageResource = QTextDocument::ImageResource,
StyleSheetResource = QTextDocument::StyleSheetResource,
MarkdownResource = QTextDocument::MarkdownResource,
UserResource = QTextDocument::UserResource,

  };
  Q_ENUM(ResourceType)

  enum Stacks {
    UndoStack = QTextDocument::UndoStack,
RedoStack = QTextDocument::RedoStack,
UndoAndRedoStacks = QTextDocument::UndoAndRedoStacks,

  };
  Q_ENUM(Stacks)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextDocument_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextDocument_Wrapper(RJSApi& h, QTextDocument* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextDocument_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#ifndef QT_NO_CSSPARSER

#endif

    // Class: QTextDocument
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextDocument_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_TEXTHTMLPARSER

#endif

#if QT_CONFIG(textmarkdownwriter)||QT_CONFIG(textmarkdownreader)

#endif

#if QT_CONFIG(textmarkdownwriter)

#endif

#if QT_CONFIG(textmarkdownreader)

#endif

#if QT_CONFIG(regularexpression)

#endif

#ifndef QT_NO_PRINTER

#endif

#ifndef QT_NO_CSSPARSER

#endif


    // non-static functions:
    
    // Class: QTextDocument
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectName
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWidgetType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindowType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  signalsBlocked
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockSignals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  findChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  children
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  installEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectTree
              (

                
              )
              
              ;
            
    // Class: QTextDocument
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectInfo
              (

                
              )
              
              ;
            
    // Class: QTextDocument
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dynamicPropertyNames
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parent
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteLater
              (

                
              )
              
              ;
            
#ifndef QT_NO_CSSPARSER

#endif

    // Class: QTextDocument
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QTextDocument
    // Function: setUndoRedoEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUndoRedoEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: isUndoRedoEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUndoRedoEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: isUndoAvailable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUndoAvailable
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: isRedoAvailable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRedoAvailable
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: availableUndoSteps
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  availableUndoSteps
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: availableRedoSteps
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  availableRedoSteps
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: revision
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  revision
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setMetaInformation
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMetaInformation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: metaInformation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  metaInformation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#ifndef QT_NO_TEXTHTMLPARSER

    // Class: QTextDocument
    // Function: toHtml
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toHtml
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setHtml
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHtml
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

#if QT_CONFIG(textmarkdownwriter)||QT_CONFIG(textmarkdownreader)

#endif

#if QT_CONFIG(textmarkdownwriter)

    // Class: QTextDocument
    // Function: toMarkdown
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toMarkdown
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#endif

#if QT_CONFIG(textmarkdownreader)

    // Class: QTextDocument
    // Function: setMarkdown
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMarkdown
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
#endif

    // Class: QTextDocument
    // Function: toRawText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toRawText
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: toPlainText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toPlainText
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setPlainText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPlainText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: characterAt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  characterAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: find
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  find
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
#if QT_CONFIG(regularexpression)

#endif

    // Class: QTextDocument
    // Function: setPageSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPageSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: pageSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pageSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setDefaultFont
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefaultFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: defaultFont
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultFont
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setSuperScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSuperScriptBaseline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: superScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  superScriptBaseline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setSubScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSubScriptBaseline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: subScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  subScriptBaseline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setBaselineOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaselineOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: baselineOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baselineOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: pageCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pageCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: isModified
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isModified
              (

                
              )
              
                const
              
              ;
            
#ifndef QT_NO_PRINTER

    // Class: QTextDocument
    // Function: print
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  print
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#endif

    // Class: QTextDocument
    // Function: resource
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resource
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: addResource
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addResource
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: allFormats
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allFormats
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: markContentsDirty
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  markContentsDirty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: setUseDesignMetrics
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUseDesignMetrics
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: useDesignMetrics
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  useDesignMetrics
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: drawContents
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawContents
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: setTextWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: textWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: idealWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  idealWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: indentWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  indentWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setIndentWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIndentWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: documentMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  documentMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setDocumentMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDocumentMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: adjustSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  adjustSize
              (

                
              )
              
              ;
            
    // Class: QTextDocument
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: blockCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: lineCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: characterCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  characterCount
              (

                
              )
              
                const
              
              ;
            
#ifndef QT_NO_CSSPARSER

    // Class: QTextDocument
    // Function: setDefaultStyleSheet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefaultStyleSheet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: defaultStyleSheet
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultStyleSheet
              (

                
              )
              
                const
              
              ;
            
#endif

    // Class: QTextDocument
    // Function: clearUndoRedoStacks
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearUndoRedoStacks
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: maximumBlockCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumBlockCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setMaximumBlockCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumBlockCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: baseUrl
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baseUrl
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setBaseUrl
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaseUrl
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: defaultCursorMoveStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultCursorMoveStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextDocument
    // Function: setDefaultCursorMoveStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefaultCursorMoveStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextDocument
    // Function: contentsChange
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void contentsChange(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void contentsChangeEmitter(
                int from, int charsRemoved, int charsAdded
              );
            
    // Class: QTextDocument
    // Function: contentsChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void contentsChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void contentsChangedEmitter(
                
              );
            
    // Class: QTextDocument
    // Function: undoAvailable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void undoAvailable(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void undoAvailableEmitter(
                bool a1
              );
            
    // Class: QTextDocument
    // Function: redoAvailable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void redoAvailable(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void redoAvailableEmitter(
                bool a1
              );
            
    // Class: QTextDocument
    // Function: undoCommandAdded
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void undoCommandAdded(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void undoCommandAddedEmitter(
                
              );
            
    // Class: QTextDocument
    // Function: modificationChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void modificationChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void modificationChangedEmitter(
                bool m
              );
            
    // Class: QTextDocument
    // Function: cursorPositionChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void cursorPositionChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void cursorPositionChangedEmitter(
                const QTextCursor& cursor
              );
            
    // Class: QTextDocument
    // Function: blockCountChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void blockCountChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void blockCountChangedEmitter(
                int newBlockCount
              );
            
    // Class: QTextDocument
    // Function: baseUrlChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void baseUrlChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void baseUrlChangedEmitter(
                const QUrl& url
              );
            
    // Class: QTextDocument
    // Function: documentLayoutChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void documentLayoutChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void documentLayoutChangedEmitter(
                
              );
            
    // Class: QTextDocument
    // Function: undo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  undo
              (

                
              )
              
              ;
            
    // Class: QTextDocument
    // Function: redo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  redo
              (

                
              )
              
              ;
            
    // Class: QTextDocument
    // Function: setModified
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModified
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QTextDocument::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QTextDocument* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextDocument* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        
          // get wrapped base object or nullptr:
          QTextDocument_Base* getWrappedBase() {
            QTextDocument* w = getWrapped();
            return dynamic_cast<QTextDocument_Base*>(w);
          }

          QTextDocument_Base* getWrappedBase() const {
            QTextDocument* w = getWrapped();
            return dynamic_cast<QTextDocument_Base*>(w);
          }
        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        
          //void setRecFlag(bool on) const {
          //  QTextDocument_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        QTextDocument* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QTextDocument*> basecasters_QTextDocument;

      public:
        static void registerBasecaster_QTextDocument(RJSBasecaster_QTextDocument* bc) {
          basecasters_QTextDocument.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QTextDocument_Wrapper*)

    Q_DECLARE_INTERFACE(QTextDocument_Wrapper, "org.qcad.QTextDocument_Wrapper")

  
  #endif
  
