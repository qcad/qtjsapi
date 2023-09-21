
  // Auto generated
  
  #ifndef QLAYOUTITEM_H_WRAPPER
  #define QLAYOUTITEM_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
        #include <QLayout>
      
        #include <QLayoutItem>
      
        #include <QSpacerItem>
      
        #include <QWidget>
      
        #include <QSize>
      
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QLayoutItem>
      
      // wrapped object is QLayoutItem_Base class if new object is created: 
      #include "qlayoutitem_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QLayoutItem
    class QLayoutItem_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QLayoutItem_Wrapper(const QLayoutItem_Wrapper&);

    public:
      // initialization of QLayoutItem:
      static void init(RJSApi& handler);

      
        static QLayoutItem* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          
            case RJSType::QBoxLayout_Type:
              return (QLayoutItem*)(QBoxLayout*)vp;
          
            case RJSType::QHBoxLayout_Type:
              return (QLayoutItem*)(QHBoxLayout*)vp;
          
            case RJSType::QVBoxLayout_Type:
              return (QLayoutItem*)(QVBoxLayout*)vp;
          
            case RJSType::QGridLayout_Type:
              return (QLayoutItem*)(QGridLayout*)vp;
          
            case RJSType::QLayout_Type:
              return (QLayoutItem*)(QLayout*)vp;
          
            case RJSType::QSpacerItem_Type:
              return (QLayoutItem*)(QSpacerItem*)vp;
          
            case RJSType::QWidgetItem_Type:
              return (QLayoutItem*)(QWidgetItem*)vp;
          
            case RJSType::QStackedLayout_Type:
              return (QLayoutItem*)(QStackedLayout*)vp;
          

          // pointer to desired type:
          
              case RJSType::QLayoutItem_Type:
                return (QLayoutItem*)vp;
            

          default:
            return nullptr;
          }
        }

        static QLayoutItem* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QLayoutItem*: wrapper wraps NULL";
          }

          QLayoutItem* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QLayoutItem*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QLayoutItem_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QLayoutItem_Wrapper(RJSApi& h, QLayoutItem* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QLayoutItem_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QLayoutItem
    // Function: minimumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QLayoutItem
    // Function: maximumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QLayoutItem
    // Function: expandingDirections
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  expandingDirections
              (

                
              )
              
                const
              
              ;
            
    // Class: QLayoutItem
    // Function: setGeometry
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGeometry
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLayoutItem
    // Function: geometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  geometry
              (

                
              )
              
                const
              
              ;
            
    // Class: QLayoutItem
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
            
    // Class: QLayoutItem
    // Function: hasHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasHeightForWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QLayoutItem
    // Function: heightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  heightForWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLayoutItem
    // Function: minimumHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumHeightForWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLayoutItem
    // Function: invalidate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  invalidate
              (

                
              )
              
              ;
            
    // Class: QLayoutItem
    // Function: widget
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  widget
              (

                
              )
              
                const
              
              ;
            
    // Class: QLayoutItem
    // Function: layout
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layout
              (

                
              )
              
              ;
            
    // Class: QLayoutItem
    // Function: spacerItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spacerItem
              (

                
              )
              
              ;
            
    // Class: QLayoutItem
    // Function: alignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alignment
              (

                
              )
              
                const
              
              ;
            
    // Class: QLayoutItem
    // Function: setAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLayoutItem
    // Function: controlTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  controlTypes
              (

                
              )
              
                const
              
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
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QLayoutItem_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QLayoutItem* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QLayoutItem* getWrapped() const {
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
          QLayoutItem_Base* getWrappedBase() {
            QLayoutItem* w = getWrapped();
            return dynamic_cast<QLayoutItem_Base*>(w);
          }

          QLayoutItem_Base* getWrappedBase() const {
            QLayoutItem* w = getWrapped();
            return dynamic_cast<QLayoutItem_Base*>(w);
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
          //  QLayoutItem_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        QLayoutItem* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QLayoutItem_Wrapper*)

    Q_DECLARE_INTERFACE(QLayoutItem_Wrapper, "org.qcad.QLayoutItem_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QSpacerItem>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSpacerItem
    class QSpacerItem_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSpacerItem_Wrapper(const QSpacerItem_Wrapper&);

    public:
      // initialization of QSpacerItem:
      static void init(RJSApi& handler);

      
        static QSpacerItem* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QSpacerItem_Type:
                return (QSpacerItem*)vp;
            

          default:
            return nullptr;
          }
        }

        static QSpacerItem* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSpacerItem*: wrapper wraps NULL";
          }

          QSpacerItem* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSpacerItem*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSpacerItem_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSpacerItem_Wrapper(RJSApi& h, QSpacerItem* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSpacerItem_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSpacerItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSpacerItem_Wrapper
                
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
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QSpacerItem
    // Function: hasHeightForWidth
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasHeightForWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: heightForWidth
    // Source: QLayoutItem
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  heightForWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: minimumHeightForWidth
    // Source: QLayoutItem
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumHeightForWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: invalidate
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  invalidate
              (

                
              )
              
              ;
            
    // Class: QSpacerItem
    // Function: widget
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  widget
              (

                
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: layout
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layout
              (

                
              )
              
              ;
            
    // Class: QSpacerItem
    // Function: alignment
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alignment
              (

                
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: setAlignment
    // Source: QLayoutItem
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSpacerItem
    // Function: controlTypes
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  controlTypes
              (

                
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: changeSize
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  changeSize
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSpacerItem
    // Function: sizeHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: minimumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: maximumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: expandingDirections
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  expandingDirections
              (

                
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
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
            
    // Class: QSpacerItem
    // Function: setGeometry
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGeometry
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSpacerItem
    // Function: geometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  geometry
              (

                
              )
              
                const
              
              ;
            
    // Class: QSpacerItem
    // Function: spacerItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spacerItem
              (

                
              )
              
              ;
            
    // Class: QSpacerItem
    // Function: sizePolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizePolicy
              (

                
              )
              
                const
              
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
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QSpacerItem_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QSpacerItem* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSpacerItem* getWrapped() const {
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

        

        private:
        // wrapped object:
        QSpacerItem* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QSpacerItem_Wrapper*)

    Q_DECLARE_INTERFACE(QSpacerItem_Wrapper, "org.qcad.QSpacerItem_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QWidgetItem>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QWidgetItem
    class QWidgetItem_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QWidgetItem_Wrapper(const QWidgetItem_Wrapper&);

    public:
      // initialization of QWidgetItem:
      static void init(RJSApi& handler);

      
        static QWidgetItem* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QWidgetItem_Type:
                return (QWidgetItem*)vp;
            

          default:
            return nullptr;
          }
        }

        static QWidgetItem* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QWidgetItem*: wrapper wraps NULL";
          }

          QWidgetItem* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QWidgetItem*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QWidgetItem_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QWidgetItem_Wrapper(RJSApi& h, QWidgetItem* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QWidgetItem_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QWidgetItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QWidgetItem_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QWidgetItem
    // Function: invalidate
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  invalidate
              (

                
              )
              
              ;
            
    // Class: QWidgetItem
    // Function: layout
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layout
              (

                
              )
              
              ;
            
    // Class: QWidgetItem
    // Function: spacerItem
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spacerItem
              (

                
              )
              
              ;
            
    // Class: QWidgetItem
    // Function: alignment
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alignment
              (

                
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
    // Function: setAlignment
    // Source: QLayoutItem
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWidgetItem
    // Function: sizeHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
    // Function: minimumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
    // Function: maximumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
    // Function: expandingDirections
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  expandingDirections
              (

                
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
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
            
    // Class: QWidgetItem
    // Function: setGeometry
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGeometry
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWidgetItem
    // Function: geometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  geometry
              (

                
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
    // Function: widget
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  widget
              (

                
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
    // Function: hasHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasHeightForWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
    // Function: heightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  heightForWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
    // Function: minimumHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumHeightForWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QWidgetItem
    // Function: controlTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  controlTypes
              (

                
              )
              
                const
              
              ;
            

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
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QWidgetItem_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QWidgetItem* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QWidgetItem* getWrapped() const {
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

        

        private:
        // wrapped object:
        QWidgetItem* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QWidgetItem_Wrapper*)

    Q_DECLARE_INTERFACE(QWidgetItem_Wrapper, "org.qcad.QWidgetItem_Wrapper")

  
  #endif
  