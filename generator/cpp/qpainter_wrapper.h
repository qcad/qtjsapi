
  // Auto generated
  
  #ifndef QPAINTER_H_WRAPPER
  #define QPAINTER_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
        #include <QBrush>
      
        #include <QFontInfo>
      
        #include <QFontMetrics>
      
        #include <QPaintDevice>
      
        #include <QPainterPath>
      
        #include <QPen>
      
        #include <QPolygon>
      
        #include <QTextItem>
      
        #include <QTransform>
      
        #include <QStaticText>
      
        #include <QGlyphRun>
      
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QPainter>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QPainter
    class QPainter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QPainter_Wrapper(const QPainter_Wrapper&);

    public:
      // initialization of QPainter:
      static void init(RJSApi& handler);

      
        static QPainter* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QPainter_Type:
                return (QPainter*)vp;
            

          default:
            return nullptr;
          }
        }

        static QPainter* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QPainter*: wrapper wraps NULL";
          }

          QPainter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QPainter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum RenderHint {
    Antialiasing = QPainter::Antialiasing,
TextAntialiasing = QPainter::TextAntialiasing,
SmoothPixmapTransform = QPainter::SmoothPixmapTransform,
VerticalSubpixelPositioning = QPainter::VerticalSubpixelPositioning,
LosslessImageRendering = QPainter::LosslessImageRendering,

  };
  Q_ENUM(RenderHint)

  enum PixmapFragmentHint {
    OpaqueHint = QPainter::OpaqueHint,

  };
  Q_ENUM(PixmapFragmentHint)

  enum CompositionMode {
    CompositionMode_SourceOver = QPainter::CompositionMode_SourceOver,
CompositionMode_DestinationOver = QPainter::CompositionMode_DestinationOver,
CompositionMode_Clear = QPainter::CompositionMode_Clear,
CompositionMode_Source = QPainter::CompositionMode_Source,
CompositionMode_Destination = QPainter::CompositionMode_Destination,
CompositionMode_SourceIn = QPainter::CompositionMode_SourceIn,
CompositionMode_DestinationIn = QPainter::CompositionMode_DestinationIn,
CompositionMode_SourceOut = QPainter::CompositionMode_SourceOut,
CompositionMode_DestinationOut = QPainter::CompositionMode_DestinationOut,
CompositionMode_SourceAtop = QPainter::CompositionMode_SourceAtop,
CompositionMode_DestinationAtop = QPainter::CompositionMode_DestinationAtop,
CompositionMode_Xor = QPainter::CompositionMode_Xor,
CompositionMode_Plus = QPainter::CompositionMode_Plus,
CompositionMode_Multiply = QPainter::CompositionMode_Multiply,
CompositionMode_Screen = QPainter::CompositionMode_Screen,
CompositionMode_Overlay = QPainter::CompositionMode_Overlay,
CompositionMode_Darken = QPainter::CompositionMode_Darken,
CompositionMode_Lighten = QPainter::CompositionMode_Lighten,
CompositionMode_ColorDodge = QPainter::CompositionMode_ColorDodge,
CompositionMode_ColorBurn = QPainter::CompositionMode_ColorBurn,
CompositionMode_HardLight = QPainter::CompositionMode_HardLight,
CompositionMode_SoftLight = QPainter::CompositionMode_SoftLight,
CompositionMode_Difference = QPainter::CompositionMode_Difference,
CompositionMode_Exclusion = QPainter::CompositionMode_Exclusion,
RasterOp_SourceOrDestination = QPainter::RasterOp_SourceOrDestination,
RasterOp_SourceAndDestination = QPainter::RasterOp_SourceAndDestination,
RasterOp_SourceXorDestination = QPainter::RasterOp_SourceXorDestination,
RasterOp_NotSourceAndNotDestination = QPainter::RasterOp_NotSourceAndNotDestination,
RasterOp_NotSourceOrNotDestination = QPainter::RasterOp_NotSourceOrNotDestination,
RasterOp_NotSourceXorDestination = QPainter::RasterOp_NotSourceXorDestination,
RasterOp_NotSource = QPainter::RasterOp_NotSource,
RasterOp_NotSourceAndDestination = QPainter::RasterOp_NotSourceAndDestination,
RasterOp_SourceAndNotDestination = QPainter::RasterOp_SourceAndNotDestination,
RasterOp_NotSourceOrDestination = QPainter::RasterOp_NotSourceOrDestination,
RasterOp_SourceOrNotDestination = QPainter::RasterOp_SourceOrNotDestination,
RasterOp_ClearDestination = QPainter::RasterOp_ClearDestination,
RasterOp_SetDestination = QPainter::RasterOp_SetDestination,
RasterOp_NotDestination = QPainter::RasterOp_NotDestination,

  };
  Q_ENUM(CompositionMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QPainter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QPainter_Wrapper(RJSApi& h, QPainter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QPainter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QPainter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QPainter_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            
#ifndef QT_NO_PICTURE

#endif

#if !defined(QT_NO_RAWFONT)

#endif


    // non-static functions:
    
    // Class: QPainter
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  device
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: begin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  begin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: end
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  end
              (

                
              )
              
              ;
            
    // Class: QPainter
    // Function: isActive
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isActive
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setCompositionMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCompositionMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: compositionMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  compositionMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: font
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  font
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setFont
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: fontInfo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontInfo
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setPen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPen
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: pen
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pen
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: brush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  brush
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setBackgroundMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackgroundMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: backgroundMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  backgroundMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: brushOrigin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  brushOrigin
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setBrushOrigin
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBrushOrigin
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
            
    // Class: QPainter
    // Function: setBackground
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: background
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  background
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: opacity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  opacity
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setOpacity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOpacity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: clipRegion
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clipRegion
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: clipPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clipPath
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setClipRect
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setClipRect
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
    
              )
              
              ;
            
    // Class: QPainter
    // Function: setClipRegion
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setClipRegion
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
            
    // Class: QPainter
    // Function: setClipPath
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setClipPath
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
            
    // Class: QPainter
    // Function: setClipping
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setClipping
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: hasClipping
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasClipping
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: clipBoundingRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clipBoundingRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: save
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  save
              (

                
              )
              
              ;
            
    // Class: QPainter
    // Function: restore
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  restore
              (

                
              )
              
              ;
            
    // Class: QPainter
    // Function: setTransform
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTransform
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
            
    // Class: QPainter
    // Function: transform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transform
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: deviceTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deviceTransform
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: resetTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetTransform
              (

                
              )
              
              ;
            
    // Class: QPainter
    // Function: setWorldTransform
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWorldTransform
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
            
    // Class: QPainter
    // Function: worldTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  worldTransform
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: combinedTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  combinedTransform
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setWorldMatrixEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWorldMatrixEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: worldMatrixEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  worldMatrixEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scale
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
            
    // Class: QPainter
    // Function: shear
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  shear
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
            
    // Class: QPainter
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rotate
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  translate
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
            
    // Class: QPainter
    // Function: window
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  window
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setWindow
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindow
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
            
    // Class: QPainter
    // Function: viewport
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  viewport
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: setViewport
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setViewport
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
            
    // Class: QPainter
    // Function: setViewTransformEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setViewTransformEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: viewTransformEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  viewTransformEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: strokePath
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  strokePath
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
            
    // Class: QPainter
    // Function: fillPath
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fillPath
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
            
    // Class: QPainter
    // Function: drawPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawPath
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: drawPoint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawPoint
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
            
    // Class: QPainter
    // Function: drawPoints
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: drawLine
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawLine
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
            
    // Class: QPainter
    // Function: drawLines
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawLines
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: drawRect
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawRect
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
            
    // Class: QPainter
    // Function: drawRects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawRects
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: drawEllipse
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawEllipse
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
            
    // Class: QPainter
    // Function: drawPolyline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawPolyline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: drawPolygon
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawPolygon
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
            
    // Class: QPainter
    // Function: drawConvexPolygon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawConvexPolygon
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: drawArc
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawArc
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
            
    // Class: QPainter
    // Function: drawPie
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawPie
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
            
    // Class: QPainter
    // Function: drawChord
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawChord
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
            
    // Class: QPainter
    // Function: drawRoundedRect
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawRoundedRect
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
    , 
  const QJSValue& 
  a7
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: drawTiledPixmap
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawTiledPixmap
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
    , 
  const QJSValue& 
  a7
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_PICTURE

    // Class: QPainter
    // Function: drawPicture
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawPicture
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
            
#endif

    // Class: QPainter
    // Function: drawPixmap
    // Source: 
    // Static: false
    // Parameters: 9
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawPixmap
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
    , 
  const QJSValue& 
  a7
      = QJSValue()
    , 
  const QJSValue& 
  a8
      = QJSValue()
    , 
  const QJSValue& 
  a9
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: drawImage
    // Source: 
    // Static: false
    // Parameters: 8
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawImage
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
    , 
  const QJSValue& 
  a7
      = QJSValue()
    , 
  const QJSValue& 
  a8
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: setLayoutDirection
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayoutDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPainter
    // Function: layoutDirection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layoutDirection
              (

                
              )
              
                const
              
              ;
            
#if !defined(QT_NO_RAWFONT)

#endif

    // Class: QPainter
    // Function: drawText
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  drawText
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
            
    // Class: QPainter
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRect
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
            
    // Class: QPainter
    // Function: fillRect
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fillRect
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
    
              )
              
              ;
            
    // Class: QPainter
    // Function: eraseRect
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  eraseRect
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
            
    // Class: QPainter
    // Function: setRenderHint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRenderHint
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
            
    // Class: QPainter
    // Function: setRenderHints
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRenderHints
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
            
    // Class: QPainter
    // Function: renderHints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  renderHints
              (

                
              )
              
                const
              
              ;
            
    // Class: QPainter
    // Function: testRenderHint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  testRenderHint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPainter
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
            
    // Class: QPainter
    // Function: beginNativePainting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  beginNativePainting
              (

                
              )
              
              ;
            
    // Class: QPainter
    // Function: endNativePainting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endNativePainting
              (

                
              )
              
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
          
              return RJSType::QPainter_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QPainter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QPainter* getWrapped() const {
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
        QPainter* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QPainter_Wrapper*)

    Q_DECLARE_INTERFACE(QPainter_Wrapper, "org.qcad.QPainter_Wrapper")

  
  #endif
  