
  // Auto generated
  
    #ifndef QIMAGE_H_WRAPPER
    #define QIMAGE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QColorSpace>
      
        #include <QColorTransform>
      
        #include <QIODevice>
      
        #include <QTransform>
      
        #include <QVariant>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QImage>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QImage_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QImage_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QImage
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
            
#ifndef Q_QDOC

#endif

#ifndef QT_NO_IMAGEFORMAT_XPM

#endif

#ifndef QT_NO_IMAGE_HEURISTIC_MASK

#endif

    // Class: QImage
    // Function: trueMatrix
    // Source: 
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
            
#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif

#if defined(Q_OS_WIN)||defined(Q_QDOC)

#endif


      private:
          RJSApi& handler;
          //static QImage_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QImage
    class QImage_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QImage_Wrapper(const QImage_Wrapper&);

    public:
      // initialization of QImage:
      static void init(RJSApi& handler);

      
        static QImage* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QImage:
          for (int i=0; i<basecasters_QImage.length(); i++) {
            RJSBasecaster_QImage* basecaster = basecasters_QImage[i];
            QImage* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QImage:
          if (t==RJSType_QImage::getIdStatic()) {
            return (QImage*)vp;
          }

          qWarning() << "QImage_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QImage* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QImage*: wrapper wraps NULL";
          }

          QImage* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QImage*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum InvertMode {
    InvertRgb = QImage::InvertRgb,
InvertRgba = QImage::InvertRgba,

  };
  Q_ENUM(InvertMode)

  enum Format {
    Format_Invalid = QImage::Format_Invalid,
Format_Mono = QImage::Format_Mono,
Format_MonoLSB = QImage::Format_MonoLSB,
Format_Indexed8 = QImage::Format_Indexed8,
Format_RGB32 = QImage::Format_RGB32,
Format_ARGB32 = QImage::Format_ARGB32,
Format_ARGB32_Premultiplied = QImage::Format_ARGB32_Premultiplied,
Format_RGB16 = QImage::Format_RGB16,
Format_ARGB8565_Premultiplied = QImage::Format_ARGB8565_Premultiplied,
Format_RGB666 = QImage::Format_RGB666,
Format_ARGB6666_Premultiplied = QImage::Format_ARGB6666_Premultiplied,
Format_RGB555 = QImage::Format_RGB555,
Format_ARGB8555_Premultiplied = QImage::Format_ARGB8555_Premultiplied,
Format_RGB888 = QImage::Format_RGB888,
Format_RGB444 = QImage::Format_RGB444,
Format_ARGB4444_Premultiplied = QImage::Format_ARGB4444_Premultiplied,
Format_RGBX8888 = QImage::Format_RGBX8888,
Format_RGBA8888 = QImage::Format_RGBA8888,
Format_RGBA8888_Premultiplied = QImage::Format_RGBA8888_Premultiplied,
Format_BGR30 = QImage::Format_BGR30,
Format_A2BGR30_Premultiplied = QImage::Format_A2BGR30_Premultiplied,
Format_RGB30 = QImage::Format_RGB30,
Format_A2RGB30_Premultiplied = QImage::Format_A2RGB30_Premultiplied,
Format_Alpha8 = QImage::Format_Alpha8,
Format_Grayscale8 = QImage::Format_Grayscale8,
Format_RGBX64 = QImage::Format_RGBX64,
Format_RGBA64 = QImage::Format_RGBA64,
Format_RGBA64_Premultiplied = QImage::Format_RGBA64_Premultiplied,
Format_Grayscale16 = QImage::Format_Grayscale16,
Format_BGR888 = QImage::Format_BGR888,
Format_RGBX16FPx4 = QImage::Format_RGBX16FPx4,
Format_RGBA16FPx4 = QImage::Format_RGBA16FPx4,
Format_RGBA16FPx4_Premultiplied = QImage::Format_RGBA16FPx4_Premultiplied,
Format_RGBX32FPx4 = QImage::Format_RGBX32FPx4,
Format_RGBA32FPx4 = QImage::Format_RGBA32FPx4,
Format_RGBA32FPx4_Premultiplied = QImage::Format_RGBA32FPx4_Premultiplied,
NImageFormats = QImage::NImageFormats,

  };
  Q_ENUM(Format)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QImage_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QImage_Wrapper(RJSApi& h, QImage* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QImage_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#ifndef Q_QDOC

#endif

    // Class: QImage
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QImage_Wrapper
                
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
    
              )
              
              ;
            
#ifndef QT_NO_IMAGEFORMAT_XPM

#endif

#ifndef QT_NO_IMAGE_HEURISTIC_MASK

#endif

#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif

#if defined(Q_OS_WIN)||defined(Q_QDOC)

#endif


    // non-static functions:
    
    // Class: QImage
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
            
    // Class: QImage
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
            
    // Class: QImage
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
            
    // Class: QImage
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
            
    // Class: QImage
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
            
    // Class: QImage
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
            
    // Class: QImage
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
            
    // Class: QImage
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
            
#ifndef Q_QDOC

#endif

#ifndef QT_NO_IMAGEFORMAT_XPM

#endif

    // Class: QImage
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
            
    // Class: QImage
    // Function: isNull
    // Source: 
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
            
    // Class: QImage
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
            
    // Class: QImage
    // Function: detach
    // Source: 
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
            
    // Class: QImage
    // Function: isDetached
    // Source: 
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
            
    // Class: QImage
    // Function: copy
    // Source: 
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
            
    // Class: QImage
    // Function: format
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  format
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: convertToFormat
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  convertToFormat
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
            
    // Class: QImage
    // Function: reinterpretAsFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reinterpretAsFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QImage
    // Function: convertedTo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  convertedTo
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
            
    // Class: QImage
    // Function: convertTo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  convertTo
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
            
    // Class: QImage
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
            
    // Class: QImage
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
            
    // Class: QImage
    // Function: size
    // Source: 
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
            
    // Class: QImage
    // Function: rect
    // Source: 
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
            
    // Class: QImage
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
            
    // Class: QImage
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
            
    // Class: QImage
    // Function: bitPlaneCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bitPlaneCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: setColorCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColorCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QImage
    // Function: allGray
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allGray
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: isGrayscale
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isGrayscale
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: sizeInBytes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeInBytes
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: bytesPerLine
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bytesPerLine
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: valid
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  valid
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
            
    // Class: QImage
    // Function: pixelIndex
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pixelIndex
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
            
    // Class: QImage
    // Function: setPixel
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPixel
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
            
    // Class: QImage
    // Function: pixelColor
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pixelColor
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
            
    // Class: QImage
    // Function: setPixelColor
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPixelColor
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
            
    // Class: QImage
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
            
    // Class: QImage
    // Function: setDevicePixelRatio
    // Source: 
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
            
    // Class: QImage
    // Function: deviceIndependentSize
    // Source: 
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
            
    // Class: QImage
    // Function: fill
    // Source: 
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
            
    // Class: QImage
    // Function: hasAlphaChannel
    // Source: 
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
            
    // Class: QImage
    // Function: setAlphaChannel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlphaChannel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QImage
    // Function: createAlphaMask
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createAlphaMask
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#ifndef QT_NO_IMAGE_HEURISTIC_MASK

    // Class: QImage
    // Function: createHeuristicMask
    // Source: 
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
            
#endif

    // Class: QImage
    // Function: scaled
    // Source: 
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
            
    // Class: QImage
    // Function: scaledToWidth
    // Source: 
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
            
    // Class: QImage
    // Function: scaledToHeight
    // Source: 
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
            
    // Class: QImage
    // Function: transformed
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transformed
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
            
    // Class: QImage
    // Function: mirrored
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mirrored
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
            
    // Class: QImage
    // Function: rgbSwapped
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rgbSwapped
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: mirror
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mirror
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
            
    // Class: QImage
    // Function: rgbSwap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rgbSwap
              (

                
              )
              
              ;
            
    // Class: QImage
    // Function: invertPixels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  invertPixels
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QImage
    // Function: load
    // Source: 
    // Static: false
    // Parameters: 2
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
    
              )
              
              ;
            
    // Class: QImage
    // Function: save
    // Source: 
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
            
    // Class: QImage
    // Function: cacheKey
    // Source: 
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
            
    // Class: QImage
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
            
    // Class: QImage
    // Function: dotsPerMeterX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dotsPerMeterX
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: dotsPerMeterY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dotsPerMeterY
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: setDotsPerMeterX
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDotsPerMeterX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QImage
    // Function: setDotsPerMeterY
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDotsPerMeterY
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QImage
    // Function: offset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  offset
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: setOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QImage
    // Function: textKeys
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textKeys
              (

                
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  text
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QImage
    // Function: setText
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setText
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
            
#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif

#if defined(Q_OS_WIN)||defined(Q_QDOC)

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
          return RJSType_QImage::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QImage* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QImage* getWrapped() const {
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
        QImage* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QImage*> basecasters_QImage;

      public:
        static void registerBasecaster_QImage(RJSBasecaster_QImage* bc) {
          basecasters_QImage.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QImage_Wrapper*)

    Q_DECLARE_INTERFACE(QImage_Wrapper, "org.qcad.QImage_Wrapper")

  
  #endif
  
