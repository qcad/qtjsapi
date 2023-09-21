

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QFILEICONPROVIDER_H_BASE
  #define QFILEICONPROVIDER_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QQmlEngine>

    
        #include <QFileIconProvider>
      
    // Base class for QFileIconProvider
      class QFileIconProvider_Base : public QFileIconProvider {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QFileIconProvider
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1
QFileIconProvider_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : QFileIconProvider(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QFileIconProvider_Base() { }

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
  