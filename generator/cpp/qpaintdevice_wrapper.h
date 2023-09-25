
  // Auto generated
  
    #ifndef QPAINTDEVICE_H_WRAPPER
    #define QPAINTDEVICE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QPaintEngine>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QPaintDevice>
      
      // wrapped object is QPaintDevice_Base class if new object is created: 
      #include "qpaintdevice_base.h"
    
      // singleton class wrapper for static functions:
      class QPaintDevice_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QPaintDevice_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QPaintDevice
    // Function: devicePixelRatioFScale
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  devicePixelRatioFScale
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QPaintDevice_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QPaintDevice
    class QPaintDevice_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QPaintDevice_Wrapper(const QPaintDevice_Wrapper&);

    public:
      // initialization of QPaintDevice:
      static void init(RJSApi& handler);

      
        static QPaintDevice* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_QAbstractItemView::getIdStatic()) {
              return (QPaintDevice*)(QAbstractItemView*)vp;
            }
            
            if (t==RJSType_QBitmap::getIdStatic()) {
              return (QPaintDevice*)(QBitmap*)vp;
            }
            
            if (t==RJSType_QHeaderView::getIdStatic()) {
              return (QPaintDevice*)(QHeaderView*)vp;
            }
            
            if (t==RJSType_QImage::getIdStatic()) {
              return (QPaintDevice*)(QImage*)vp;
            }
            
            if (t==RJSType_QPagedPaintDevice::getIdStatic()) {
              return (QPaintDevice*)(QPagedPaintDevice*)vp;
            }
            
            if (t==RJSType_QPicture::getIdStatic()) {
              return (QPaintDevice*)(QPicture*)vp;
            }
            
            if (t==RJSType_QPixmap::getIdStatic()) {
              return (QPaintDevice*)(QPixmap*)vp;
            }
            
            if (t==RJSType_QPrinter::getIdStatic()) {
              return (QPaintDevice*)(QPrinter*)vp;
            }
            
            if (t==RJSType_QTreeView::getIdStatic()) {
              return (QPaintDevice*)(QTreeView*)vp;
            }
            
            if (t==RJSType_QWidget::getIdStatic()) {
              return (QPaintDevice*)(QWidget*)vp;
            }
            

          // pointer to desired type:
          if (t==RJSType_QPaintDevice::getIdStatic()) {
            return (QPaintDevice*)vp;
          }

          return nullptr;
          
        }

        static QPaintDevice* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QPaintDevice*: wrapper wraps NULL";
          }

          QPaintDevice* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QPaintDevice*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QPaintDevice_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QPaintDevice_Wrapper(RJSApi& h, QPaintDevice* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QPaintDevice_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QPaintDevice
    // Function: devType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  devType
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: paintingActive
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  paintingActive
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: paintEngine
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  paintEngine
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  width
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  height
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: widthMM
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  widthMM
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: heightMM
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  heightMM
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: logicalDpiX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  logicalDpiX
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: logicalDpiY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  logicalDpiY
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: physicalDpiX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  physicalDpiX
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: physicalDpiY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  physicalDpiY
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: devicePixelRatio
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  devicePixelRatio
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: devicePixelRatioF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  devicePixelRatioF
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: colorCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  colorCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintDevice
    // Function: depth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  depth
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QPaintDevice::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QPaintDevice* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QPaintDevice* getWrapped() const {
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
          QPaintDevice_Base* getWrappedBase() {
            QPaintDevice* w = getWrapped();
            return dynamic_cast<QPaintDevice_Base*>(w);
          }

          QPaintDevice_Base* getWrappedBase() const {
            QPaintDevice* w = getWrapped();
            return dynamic_cast<QPaintDevice_Base*>(w);
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
          //  QPaintDevice_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        QPaintDevice* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QPaintDevice_Wrapper*)

    Q_DECLARE_INTERFACE(QPaintDevice_Wrapper, "org.qcad.QPaintDevice_Wrapper")

  
  #endif
  