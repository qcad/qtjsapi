
  // Auto generated
  
    #ifndef QPAGEDPAINTDEVICE_H_WRAPPER
    #define QPAGEDPAINTDEVICE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QPagedPaintDevice>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QPagedPaintDevice
    class QTJSAPI_EXPORT QPagedPaintDevice_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QPagedPaintDevice_Wrapper(const QPagedPaintDevice_Wrapper&);

    public:
      // initialization of QPagedPaintDevice:
      static void init(RJSApi& handler);

      
        static QPagedPaintDevice* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QPrinter::getIdStatic()) {
                return (QPagedPaintDevice*)(QPrinter*)vp;
              }
              

          // hook for modules to cast from other types to base QPagedPaintDevice:
          for (int i=0; i<basecasters_QPagedPaintDevice.length(); i++) {
            RJSBasecaster_QPagedPaintDevice* basecaster = basecasters_QPagedPaintDevice[i];
            QPagedPaintDevice* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QPagedPaintDevice:
          if (t==RJSType_QPagedPaintDevice::getIdStatic()) {
            return (QPagedPaintDevice*)vp;
          }

          qWarning() << "QPagedPaintDevice_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QPagedPaintDevice* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QPagedPaintDevice*: wrapper wraps NULL";
          }

          QPagedPaintDevice* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QPagedPaintDevice*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum PdfVersion {
    PdfVersion_1_4 = QPagedPaintDevice::PdfVersion_1_4,
PdfVersion_A1b = QPagedPaintDevice::PdfVersion_A1b,
PdfVersion_1_6 = QPagedPaintDevice::PdfVersion_1_6,

  };
  Q_ENUM(PdfVersion)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QPagedPaintDevice_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QPagedPaintDevice_Wrapper(RJSApi& h, QPagedPaintDevice* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QPagedPaintDevice_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QPagedPaintDevice
    // Function: devType
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: paintingActive
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: paintEngine
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: width
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: height
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: widthMM
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: heightMM
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: logicalDpiX
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: logicalDpiY
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: physicalDpiX
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: physicalDpiY
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: devicePixelRatio
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: devicePixelRatioF
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: colorCount
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: depth
    // Source: QPaintDevice
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
            
    // Class: QPagedPaintDevice
    // Function: newPage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  newPage
              (

                
              )
              
              ;
            
    // Class: QPagedPaintDevice
    // Function: setPageLayout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPageLayout
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPagedPaintDevice
    // Function: setPageSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPageSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPagedPaintDevice
    // Function: setPageOrientation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPageOrientation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPagedPaintDevice
    // Function: setPageMargins
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPageMargins
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPagedPaintDevice
    // Function: pageLayout
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pageLayout
              (

                
              )
              
                const
              
              ;
            
    // Class: QPagedPaintDevice
    // Function: setPageRanges
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPageRanges
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPagedPaintDevice
    // Function: pageRanges
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pageRanges
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
          return RJSType_QPagedPaintDevice::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QPagedPaintDevice* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QPagedPaintDevice* getWrapped() const {
          
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
          QPagedPaintDevice* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QPagedPaintDevice*> basecasters_QPagedPaintDevice;

      public:
        static void registerBasecaster_QPagedPaintDevice(RJSBasecaster_QPagedPaintDevice* bc) {
          basecasters_QPagedPaintDevice.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QPagedPaintDevice_Wrapper*)

    Q_DECLARE_INTERFACE(QPagedPaintDevice_Wrapper, "org.qcad.QPagedPaintDevice_Wrapper")

  
  #endif
  
