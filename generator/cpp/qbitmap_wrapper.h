
  // Auto generated
  
    #ifndef QBITMAP_H_WRAPPER
    #define QBITMAP_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QVariant>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QBitmap>
      
      // singleton class wrapper for static functions:
      class QBitmap_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QBitmap_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QBitmap
    // Function: devicePixelRatioFScale
    // Source: QPaintDevice
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
            
    // Class: QBitmap
    // Function: defaultDepth
    // Source: QPixmap
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultDepth
              (

                
              )
              
              ;
            
    // Class: QBitmap
    // Function: trueMatrix
    // Source: QPixmap
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  trueMatrix
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
    
              )
              
              ;
            
    // Class: QBitmap
    // Function: fromImageReader
    // Source: QPixmap
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromImageReader
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
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QBitmap
    // Function: fromImage
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromImage
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
            
    // Class: QBitmap
    // Function: fromPixmap
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromPixmap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QBitmap_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QBitmap
    class QBitmap_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QBitmap_Wrapper(const QBitmap_Wrapper&);

    public:
      // initialization of QBitmap:
      static void init(RJSApi& handler);

      
        static QBitmap* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QBitmap.length(); i++) {
            RJSBasecaster_QBitmap* basecaster = basecasters_QBitmap[i];
            QBitmap* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QBitmap::getIdStatic()) {
            return (QBitmap*)vp;
          }

          qWarning() << "QBitmap::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QBitmap* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QBitmap*: wrapper wraps NULL";
          }

          QBitmap* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QBitmap*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QBitmap_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QBitmap_Wrapper(RJSApi& h, QBitmap* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QBitmap_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QBitmap
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QBitmap_Wrapper
                
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
    
              )
              
              ;
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

#if QT_DEPRECATED_SINCE(6,0)

#endif


    // non-static functions:
    
    // Class: QBitmap
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
            
    // Class: QBitmap
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
            
    // Class: QBitmap
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
            
    // Class: QBitmap
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
            
    // Class: QBitmap
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
            
    // Class: QBitmap
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
            
    // Class: QBitmap
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
            
    // Class: QBitmap
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
            
    // Class: QBitmap
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
            
    // Class: QBitmap
    // Function: isNull
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: devType
    // Source: QPixmap
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
            
    // Class: QBitmap
    // Function: width
    // Source: QPixmap
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
            
    // Class: QBitmap
    // Function: height
    // Source: QPixmap
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
            
    // Class: QBitmap
    // Function: size
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: rect
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rect
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: depth
    // Source: QPixmap
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
            
    // Class: QBitmap
    // Function: fill
    // Source: QPixmap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fill
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QBitmap
    // Function: mask
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mask
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: setMask
    // Source: QPixmap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMask
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QBitmap
    // Function: devicePixelRatio
    // Source: QPixmap
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
            
    // Class: QBitmap
    // Function: setDevicePixelRatio
    // Source: QPixmap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDevicePixelRatio
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QBitmap
    // Function: deviceIndependentSize
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deviceIndependentSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: hasAlpha
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAlpha
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: hasAlphaChannel
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAlphaChannel
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: createHeuristicMask
    // Source: QPixmap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createHeuristicMask
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: createMaskFromColor
    // Source: QPixmap
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createMaskFromColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: scaled
    // Source: QPixmap
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scaled
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
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: scaledToWidth
    // Source: QPixmap
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scaledToWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: scaledToHeight
    // Source: QPixmap
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scaledToHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: toImage
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toImage
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: load
    // Source: QPixmap
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  load
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
    
              )
              
              ;
            
    // Class: QBitmap
    // Function: loadFromData
    // Source: QPixmap
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  loadFromData
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
    
              )
              
              ;
            
    // Class: QBitmap
    // Function: save
    // Source: QPixmap
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  save
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
    
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: convertFromImage
    // Source: QPixmap
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  convertFromImage
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
            
    // Class: QBitmap
    // Function: copy
    // Source: QPixmap
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  copy
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
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: scroll
    // Source: QPixmap
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scroll
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
    , 
  const QJSValue& 
  a5
      = QJSValue()
    , 
  const QJSValue& 
  a6
      = QJSValue()
    
              )
              
              ;
            
    // Class: QBitmap
    // Function: cacheKey
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cacheKey
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: isDetached
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDetached
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: detach
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  detach
              (

                
              )
              
              ;
            
    // Class: QBitmap
    // Function: isQBitmap
    // Source: QPixmap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isQBitmap
              (

                
              )
              
                const
              
              ;
            
    // Class: QBitmap
    // Function: paintEngine
    // Source: QPixmap
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
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QBitmap
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QBitmap
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QBitmap
    // Function: transformed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transformed
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
          return RJSType_QBitmap::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QBitmap* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QBitmap* getWrapped() const {
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
        QBitmap* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QBitmap*> basecasters_QBitmap;

      public:
        static void registerBasecaster_QBitmap(RJSBasecaster_QBitmap* bc) {
          basecasters_QBitmap.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QBitmap_Wrapper*)

    Q_DECLARE_INTERFACE(QBitmap_Wrapper, "org.qcad.QBitmap_Wrapper")

  
  #endif
  