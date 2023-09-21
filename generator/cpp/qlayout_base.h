

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QLAYOUT_H_BASE
  #define QLAYOUT_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QLayout>
  
    #include <QSize>
  
    #include <QQmlEngine>

    
        #include <QLayout>
      
    // Base class for QLayout
      class QLayout_Base : public QLayout {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QLayout
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QLayout_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QLayout(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QLayout_Base() { }

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
    virtual QSize sizeHint(
      
    )
    
      const
    
    ;

    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void addItem(
      QLayoutItem* a1
    )
    
    ;

    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual QSize minimumSize(
      
    )
    
      const
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual QSize minimumSizeSup(
        
      )
      
        const
      
      {
        
          return
        QLayout::minimumSize(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void setGeometry(
      const QRect& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void setGeometrySup(
        const QRect& a1
      )
      
      {
        QLayout::setGeometry(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual QLayoutItem* itemAt(
      int index
    )
    
      const
    
    ;

    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual QLayoutItem* takeAt(
      int index
    )
    
    ;

    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual int count(
      
    )
    
      const
    
    ;

    

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
  