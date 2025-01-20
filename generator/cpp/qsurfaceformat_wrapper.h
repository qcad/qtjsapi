
  // Auto generated
  
    #ifndef QSURFACEFORMAT_H_WRAPPER
    #define QSURFACEFORMAT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QColorSpace>
      
        #include <QOpenGLContext>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSurfaceFormat>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QSurfaceFormat_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QSurfaceFormat_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
#if QT_DEPRECATED_SINCE(6,0)

#endif

#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QSurfaceFormat
    // Function: setDefaultFormat
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefaultFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: defaultFormat
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultFormat
              (

                
              )
              
              ;
            
#ifndef QT_NO_DEBUG_STREAM

#endif


      private:
          RJSApi& handler;
          //static QSurfaceFormat_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSurfaceFormat
    class QTJSAPI_EXPORT QSurfaceFormat_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSurfaceFormat_Wrapper(const QSurfaceFormat_Wrapper&);

    public:
      // initialization of QSurfaceFormat:
      static void init(RJSApi& handler);

      
        static QSurfaceFormat* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSurfaceFormat:
          for (int i=0; i<basecasters_QSurfaceFormat.length(); i++) {
            RJSBasecaster_QSurfaceFormat* basecaster = basecasters_QSurfaceFormat[i];
            QSurfaceFormat* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSurfaceFormat:
          if (t==RJSType_QSurfaceFormat::getIdStatic()) {
            return (QSurfaceFormat*)vp;
          }

          qWarning() << "QSurfaceFormat_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSurfaceFormat* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSurfaceFormat*: wrapper wraps NULL";
          }

          QSurfaceFormat* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSurfaceFormat*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum FormatOption {
    StereoBuffers = QSurfaceFormat::StereoBuffers,
DebugContext = QSurfaceFormat::DebugContext,
DeprecatedFunctions = QSurfaceFormat::DeprecatedFunctions,
ResetNotification = QSurfaceFormat::ResetNotification,
ProtectedContent = QSurfaceFormat::ProtectedContent,

  };
  Q_ENUM(FormatOption)

  enum SwapBehavior {
    DefaultSwapBehavior = QSurfaceFormat::DefaultSwapBehavior,
SingleBuffer = QSurfaceFormat::SingleBuffer,
DoubleBuffer = QSurfaceFormat::DoubleBuffer,
TripleBuffer = QSurfaceFormat::TripleBuffer,

  };
  Q_ENUM(SwapBehavior)

  enum RenderableType {
    DefaultRenderableType = QSurfaceFormat::DefaultRenderableType,
OpenGL = QSurfaceFormat::OpenGL,
OpenGLES = QSurfaceFormat::OpenGLES,
OpenVG = QSurfaceFormat::OpenVG,

  };
  Q_ENUM(RenderableType)

  enum OpenGLContextProfile {
    NoProfile = QSurfaceFormat::NoProfile,
CoreProfile = QSurfaceFormat::CoreProfile,
CompatibilityProfile = QSurfaceFormat::CompatibilityProfile,

  };
  Q_ENUM(OpenGLContextProfile)

  enum ColorSpace {
    DefaultColorSpace = QSurfaceFormat::DefaultColorSpace,
sRGBColorSpace = QSurfaceFormat::sRGBColorSpace,

  };
  Q_ENUM(ColorSpace)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSurfaceFormat_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSurfaceFormat_Wrapper(RJSApi& h, QSurfaceFormat* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSurfaceFormat_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QSurfaceFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSurfaceFormat_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

#ifndef QT_NO_DEBUG_STREAM

#endif


    // non-static functions:
    
#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QSurfaceFormat
    // Function: setDepthBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDepthBufferSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: depthBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  depthBufferSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setStencilBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStencilBufferSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: stencilBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stencilBufferSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setRedBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRedBufferSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: redBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  redBufferSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setGreenBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGreenBufferSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: greenBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  greenBufferSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setBlueBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBlueBufferSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: blueBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blueBufferSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setAlphaBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlphaBufferSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: alphaBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alphaBufferSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setSamples
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSamples
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: samples
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  samples
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setSwapBehavior
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSwapBehavior
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: swapBehavior
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swapBehavior
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: hasAlpha
    // Source: 
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
            
    // Class: QSurfaceFormat
    // Function: setProfile
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProfile
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: profile
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  profile
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setRenderableType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRenderableType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: renderableType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  renderableType
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setMajorVersion
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMajorVersion
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: majorVersion
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  majorVersion
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setMinorVersion
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinorVersion
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: minorVersion
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minorVersion
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setVersion
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVersion
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
            
    // Class: QSurfaceFormat
    // Function: stereo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stereo
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setStereo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStereo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setOptions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOptions
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setOption
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOption
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
            
    // Class: QSurfaceFormat
    // Function: testOption
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  testOption
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: options
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  options
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: swapInterval
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swapInterval
              (

                
              )
              
                const
              
              ;
            
    // Class: QSurfaceFormat
    // Function: setSwapInterval
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSwapInterval
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

#ifndef QT_NO_DEBUG_STREAM

#endif

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
          return RJSType_QSurfaceFormat::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSurfaceFormat* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSurfaceFormat* getWrapped() const {
          
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
          QSurfaceFormat* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSurfaceFormat*> basecasters_QSurfaceFormat;

      public:
        static void registerBasecaster_QSurfaceFormat(RJSBasecaster_QSurfaceFormat* bc) {
          basecasters_QSurfaceFormat.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSurfaceFormat_Wrapper*)

    Q_DECLARE_INTERFACE(QSurfaceFormat_Wrapper, "org.qcad.QSurfaceFormat_Wrapper")

  
  #endif
  
