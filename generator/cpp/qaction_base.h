

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QACTION_H_BASE
  #define QACTION_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QMenu>
  
    #include <QActionGroup>
  
    #include <QGraphicsWidget>
  
    #include <QQmlEngine>

    
        #include <QAction>
      
    // Base class for QAction
      class QAction_Base : public QAction {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QAction
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
QAction_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QIcon& icon, const QString& text, QObject* parent=nullptr
      )
      
        : QAction(
          icon, text, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QAction
  // Function: 
  // Parameters: 2
  // preceding Parameters: 3
QAction_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& text, QObject* parent=nullptr
      )
      
        : QAction(
          text, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QAction
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QAction_Base
        
      (

        
          RJSApi& _h
          
            ,
          QObject* parent=nullptr
      )
      
        : QAction(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(shortcut)

#endif

#if QT_CONFIG(menu)

#endif

#if QT_CONFIG(shortcut)

#endif

#ifdef Q_OS_MAC

#endif

    // destructor:
    virtual ~QAction_Base() { }

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
  