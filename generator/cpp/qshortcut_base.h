

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QSHORTCUT_H_BASE
  #define QSHORTCUT_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QWindow>
  
    #include <QQmlEngine>

    
        #include <QShortcut>
      
    // Base class for QShortcut
      class QShortcut_Base : public QShortcut {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QShortcut
  // Function: 
  // Parameters: 5
  // preceding Parameters: -1
QShortcut_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QKeySequence& key, QObject* parent, const char* member=nullptr, const char* ambiguousMember=nullptr, Qt::ShortcutContext context=Qt::WindowShortcut
      )
      
        : QShortcut(
          key, parent, member, ambiguousMember, context
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QShortcut
  // Function: 
  // Parameters: 1
  // preceding Parameters: 5
QShortcut_Base
        
      (

        
          RJSApi& _h
          
            ,
          QObject* parent
      )
      
        : QShortcut(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#ifdef Q_CLANG_QDOC

#else

#endif

#if QT_DEPRECATED_SINCE(6,0)

#ifdef Q_CLANG_QDOC

#else

#endif

#endif

    // destructor:
    virtual ~QShortcut_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    bool event(
      QEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE bool eventPublic(
      QEvent* e
    ) {
      //qDebug() << "QShortcut_Base::eventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QShortcut::event(
        e
      );
    }
  

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
  