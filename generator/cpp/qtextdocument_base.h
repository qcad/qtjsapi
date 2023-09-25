

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QTEXTDOCUMENT_H_BASE
  #define QTEXTDOCUMENT_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
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

    
        #include <QTextDocument>
      
    // Base class for QTextDocument
      class QTextDocument_Base : public QTextDocument {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
#ifndef QT_NO_CSSPARSER

#endif

  // Class: QTextDocument
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QTextDocument_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& text, QObject* parent=nullptr
      )
      
        : QTextDocument(
          text, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QTextDocument
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QTextDocument_Base
        
      (

        
          RJSApi& _h
          
            ,
          QObject* parent=nullptr
      )
      
        : QTextDocument(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
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

    // destructor:
    virtual ~QTextDocument_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      

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
  