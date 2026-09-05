
  // Auto generated
  
    #ifndef QHELPCONTENTITEM_H_WRAPPER
    #define QHELPCONTENTITEM_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #ifdef QT_HELP_LIB
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QHelpContentItem>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QHelpContentItem
    class QTJSAPI_EXPORT QHelpContentItem_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QHelpContentItem_Wrapper(const QHelpContentItem_Wrapper&);

    public:
      // initialization of QHelpContentItem:
      static void init(RJSApi& handler);

      
        static QHelpContentItem* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QHelpContentItem:
          for (int i=0; i<basecasters_QHelpContentItem.length(); i++) {
            RJSBasecaster_QHelpContentItem* basecaster = basecasters_QHelpContentItem[i];
            QHelpContentItem* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QHelpContentItem:
          if (t==RJSType_QHelpContentItem::getIdStatic()) {
            return (QHelpContentItem*)vp;
          }

          qWarning() << "QHelpContentItem_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QHelpContentItem* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QHelpContentItem*: wrapper wraps NULL";
          }

          QHelpContentItem* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QHelpContentItem*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QHelpContentItem_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QHelpContentItem_Wrapper(RJSApi& h, QHelpContentItem* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QHelpContentItem_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QHelpContentItem
    // Function: child
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  child
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QHelpContentItem
    // Function: childCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpContentItem
    // Function: title
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  title
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpContentItem
    // Function: url
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  url
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpContentItem
    // Function: row
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  row
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpContentItem
    // Function: parent
    // Source: 
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
            
    // Class: QHelpContentItem
    // Function: childPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QHelpContentItem::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QHelpContentItem* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QHelpContentItem* getWrapped() const {
          
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
          QHelpContentItem* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QHelpContentItem*> basecasters_QHelpContentItem;

      public:
        static void registerBasecaster_QHelpContentItem(RJSBasecaster_QHelpContentItem* bc) {
          basecasters_QHelpContentItem.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QHelpContentItem_Wrapper*)

    Q_DECLARE_INTERFACE(QHelpContentItem_Wrapper, "org.qcad.QHelpContentItem_Wrapper")

  
    #endif
  
  #endif
  
