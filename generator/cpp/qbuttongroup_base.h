

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QBUTTONGROUP_H_BASE
  #define QBUTTONGROUP_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QAbstractButton>
  
    #include <QQmlEngine>

    
        #include <QButtonGroup>
      
    // Base class for QButtonGroup
      class QButtonGroup_Base : public QButtonGroup {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QButtonGroup
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QButtonGroup_Base
        
      (

        
          RJSApi& _h
          
            ,
          QObject* parent=nullptr
      )
      
        : QButtonGroup(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QButtonGroup_Base() { }

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
  