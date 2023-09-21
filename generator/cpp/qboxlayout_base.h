

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QBOXLAYOUT_H_BASE
  #define QBOXLAYOUT_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QQmlEngine>

    
        #include <QBoxLayout>
      
    // Base class for QBoxLayout
      class QBoxLayout_Base : public QBoxLayout {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QBoxLayout
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QBoxLayout_Base
        
      (

        
          RJSApi& _h
          
            ,
          QBoxLayout::Direction a1, QWidget* parent=nullptr
      )
      
        : QBoxLayout(
          a1, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QBoxLayout_Base() { }

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
    
    #include <QQmlEngine>

    
        #include <QHBoxLayout>
      
    // Base class for QHBoxLayout
      class QHBoxLayout_Base : public QHBoxLayout {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QHBoxLayout
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QHBoxLayout_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent
      )
      
        : QHBoxLayout(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QHBoxLayout
  // Function: 
  // Parameters: 0
  // preceding Parameters: 1
QHBoxLayout_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : QHBoxLayout(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QHBoxLayout_Base() { }

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
    
    #include <QQmlEngine>

    
        #include <QVBoxLayout>
      
    // Base class for QVBoxLayout
      class QVBoxLayout_Base : public QVBoxLayout {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QVBoxLayout
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QVBoxLayout_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent
      )
      
        : QVBoxLayout(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QVBoxLayout
  // Function: 
  // Parameters: 0
  // preceding Parameters: 1
QVBoxLayout_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : QVBoxLayout(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QVBoxLayout_Base() { }

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
  