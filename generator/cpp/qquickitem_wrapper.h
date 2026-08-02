
  // Auto generated
  
    #ifndef QQUICKITEM_H_WRAPPER
    #define QQUICKITEM_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QQuickItem>
      
        #include <QCursor>
      
        #include <QQuickWindow>
      
        #include <QTouchEvent>
      
        #include <QQuickItemGrabResult>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QQuickItem>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QQuickItem
    class QTJSAPI_EXPORT QQuickItem_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )

  Q_PROPERTY(
    
    QJSValue
     width READ width WRITE setWidth
  )

  Q_PROPERTY(
    
    QJSValue
     height READ height WRITE setHeight
  )


    private:
      // disable copy constructor:
      QQuickItem_Wrapper(const QQuickItem_Wrapper&);

    public:
      // initialization of QQuickItem:
      static void init(RJSApi& handler);

      
        static QQuickItem* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QQuickItem:
          for (int i=0; i<basecasters_QQuickItem.length(); i++) {
            RJSBasecaster_QQuickItem* basecaster = basecasters_QQuickItem[i];
            QQuickItem* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QQuickItem:
          if (t==RJSType_QQuickItem::getIdStatic()) {
            return (QQuickItem*)vp;
          }

          qWarning() << "QQuickItem_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QQuickItem* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QQuickItem*: wrapper wraps NULL";
          }

          QQuickItem* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QQuickItem*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ItemChange {
    ItemChildAddedChange = QQuickItem::ItemChildAddedChange,
ItemChildRemovedChange = QQuickItem::ItemChildRemovedChange,
ItemSceneChange = QQuickItem::ItemSceneChange,
ItemVisibleHasChanged = QQuickItem::ItemVisibleHasChanged,
ItemParentHasChanged = QQuickItem::ItemParentHasChanged,
ItemOpacityHasChanged = QQuickItem::ItemOpacityHasChanged,
ItemActiveFocusHasChanged = QQuickItem::ItemActiveFocusHasChanged,
ItemRotationHasChanged = QQuickItem::ItemRotationHasChanged,
ItemAntialiasingHasChanged = QQuickItem::ItemAntialiasingHasChanged,
ItemDevicePixelRatioHasChanged = QQuickItem::ItemDevicePixelRatioHasChanged,
ItemEnabledHasChanged = QQuickItem::ItemEnabledHasChanged,
ItemScaleHasChanged = QQuickItem::ItemScaleHasChanged,
ItemTransformHasChanged = QQuickItem::ItemTransformHasChanged,

  };
  Q_ENUM(ItemChange)

  enum TransformOrigin {
    TopLeft = QQuickItem::TopLeft,
Top = QQuickItem::Top,
TopRight = QQuickItem::TopRight,
Left = QQuickItem::Left,
Center = QQuickItem::Center,
Right = QQuickItem::Right,
BottomLeft = QQuickItem::BottomLeft,
Bottom = QQuickItem::Bottom,
BottomRight = QQuickItem::BottomRight,

  };
  Q_ENUM(TransformOrigin)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QQuickItem_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QQuickItem_Wrapper(RJSApi& h, QQuickItem* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QQuickItem_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QQuickItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QQuickItem_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_CONFIG(cursor)

#endif

#if QT_CONFIG(im)

#endif


    // non-static functions:
    
    // Class: QQuickItem
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectName
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWidgetType
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindowType
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  signalsBlocked
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockSignals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  findChild
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
            
    // Class: QQuickItem
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  children
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  installEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectTree
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectInfo
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
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
            
    // Class: QQuickItem
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dynamicPropertyNames
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: parent
    // Source: QObject
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
            
    // Class: QQuickItem
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteLater
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: parentItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentItem
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setParentItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParentItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: stackBefore
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stackBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: stackAfter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stackAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: childrenRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childrenRect
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: clip
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clip
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setClip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setClip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: state
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  state
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setState
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: baselineOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baselineOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setBaselineOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaselineOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: x
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  x
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: y
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  y
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: position
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setX
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: setY
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setY
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: setPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
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
            
    // Class: QQuickItem
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: resetWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetWidth
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: setImplicitWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setImplicitWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: implicitWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  implicitWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
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
            
    // Class: QQuickItem
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: resetHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetHeight
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: setImplicitHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setImplicitHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: implicitHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  implicitHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
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
            
    // Class: QQuickItem
    // Function: setSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: transformOrigin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transformOrigin
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setTransformOrigin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTransformOrigin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: transformOriginPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transformOriginPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setTransformOriginPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTransformOriginPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: z
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  z
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setZ
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setZ
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: rotation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setRotation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRotation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scale
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setScale
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setScale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
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
            
    // Class: QQuickItem
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
            
    // Class: QQuickItem
    // Function: isVisible
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVisible
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setVisible
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: isEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: smooth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  smooth
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setSmooth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSmooth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: activeFocusOnTab
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  activeFocusOnTab
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setActiveFocusOnTab
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setActiveFocusOnTab
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: antialiasing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  antialiasing
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setAntialiasing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAntialiasing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: resetAntialiasing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetAntialiasing
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: clipRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clipRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: viewportItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  viewportItem
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: hasActiveFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasActiveFocus
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: hasFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasFocus
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setFocus
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocus
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
            
    // Class: QQuickItem
    // Function: isFocusScope
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFocusScope
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: scopedFocusItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scopedFocusItem
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: focusPolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focusPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setFocusPolicy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocusPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: isAncestorOf
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAncestorOf
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: acceptedMouseButtons
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  acceptedMouseButtons
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setAcceptedMouseButtons
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAcceptedMouseButtons
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: acceptHoverEvents
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  acceptHoverEvents
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setAcceptHoverEvents
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAcceptHoverEvents
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: acceptTouchEvents
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  acceptTouchEvents
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setAcceptTouchEvents
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAcceptTouchEvents
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_CONFIG(cursor)

    // Class: QQuickItem
    // Function: cursor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursor
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setCursor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: unsetCursor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unsetCursor
              (

                
              )
              
              ;
            
#endif

    // Class: QQuickItem
    // Function: isUnderMouse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUnderMouse
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: grabMouse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabMouse
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: ungrabMouse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ungrabMouse
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: keepMouseGrab
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keepMouseGrab
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setKeepMouseGrab
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKeepMouseGrab
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: filtersChildMouseEvents
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  filtersChildMouseEvents
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setFiltersChildMouseEvents
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFiltersChildMouseEvents
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: grabTouchPoints
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabTouchPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: ungrabTouchPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ungrabTouchPoints
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: keepTouchGrab
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keepTouchGrab
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setKeepTouchGrab
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKeepTouchGrab
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contains
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: containmentMask
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  containmentMask
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: setContainmentMask
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setContainmentMask
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: mapToScene
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapToScene
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: mapRectToItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapRectToItem
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
            
    // Class: QQuickItem
    // Function: mapRectToScene
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapRectToScene
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: mapFromScene
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapFromScene
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: mapRectFromItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapRectFromItem
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
            
    // Class: QQuickItem
    // Function: mapRectFromScene
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapRectFromScene
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: polish
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  polish
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: forceActiveFocus
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  forceActiveFocus
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: nextItemInFocusChain
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextItemInFocusChain
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QQuickItem
    // Function: childAt
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childAt
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
            
    // Class: QQuickItem
    // Function: ensurePolished
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ensurePolished
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: dumpItemTree
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpItemTree
              (

                
              )
              
                const
              
              ;
            
#if QT_CONFIG(im)

    // Class: QQuickItem
    // Function: inputMethodQuery
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  inputMethodQuery
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#endif

    // Class: QQuickItem
    // Function: isTextureProvider
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTextureProvider
              (

                
              )
              
                const
              
              ;
            
    // Class: QQuickItem
    // Function: update
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
              )
              
              ;
            
    // Class: QQuickItem
    // Function: childrenRectChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void childrenRectChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void childrenRectChangedEmitter(
                const QRectF& a1
              );
            
    // Class: QQuickItem
    // Function: baselineOffsetChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void baselineOffsetChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void baselineOffsetChangedEmitter(
                qreal a1
              );
            
    // Class: QQuickItem
    // Function: stateChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void stateChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void stateChangedEmitter(
                const QString& a1
              );
            
    // Class: QQuickItem
    // Function: focusChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void focusChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void focusChangedEmitter(
                bool a1
              );
            
    // Class: QQuickItem
    // Function: activeFocusChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void activeFocusChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void activeFocusChangedEmitter(
                bool a1
              );
            
    // Class: QQuickItem
    // Function: focusPolicyChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void focusPolicyChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void focusPolicyChangedEmitter(
                Qt::FocusPolicy a1
              );
            
    // Class: QQuickItem
    // Function: activeFocusOnTabChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void activeFocusOnTabChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void activeFocusOnTabChangedEmitter(
                bool a1
              );
            
    // Class: QQuickItem
    // Function: parentChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void parentChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void parentChangedEmitter(
                QQuickItem* a1
              );
            
    // Class: QQuickItem
    // Function: transformOriginChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void transformOriginChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void transformOriginChangedEmitter(
                QQuickItem::TransformOrigin a1
              );
            
    // Class: QQuickItem
    // Function: smoothChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void smoothChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void smoothChangedEmitter(
                bool a1
              );
            
    // Class: QQuickItem
    // Function: antialiasingChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void antialiasingChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void antialiasingChangedEmitter(
                bool a1
              );
            
    // Class: QQuickItem
    // Function: clipChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void clipChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void clipChangedEmitter(
                bool a1
              );
            
    // Class: QQuickItem
    // Function: childrenChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void childrenChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void childrenChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: opacityChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void opacityChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void opacityChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: enabledChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void enabledChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void enabledChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: visibleChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void visibleChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void visibleChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: visibleChildrenChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void visibleChildrenChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void visibleChildrenChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: rotationChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void rotationChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void rotationChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: scaleChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void scaleChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void scaleChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: xChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void xChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void xChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: yChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void yChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void yChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: widthChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void widthChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void widthChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: heightChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void heightChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void heightChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: zChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void zChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void zChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: implicitWidthChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void implicitWidthChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void implicitWidthChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: implicitHeightChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void implicitHeightChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void implicitHeightChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: containmentMaskChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void containmentMaskChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void containmentMaskChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: paletteChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void paletteChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void paletteChangedEmitter(
                
              );
            
    // Class: QQuickItem
    // Function: paletteCreated
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void paletteCreated(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void paletteCreatedEmitter(
                
              );
            
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
          return RJSType_QQuickItem::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QQuickItem* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QQuickItem* getWrapped() const {
          
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
          QQuickItem* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QQuickItem*> basecasters_QQuickItem;

      public:
        static void registerBasecaster_QQuickItem(RJSBasecaster_QQuickItem* bc) {
          basecasters_QQuickItem.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QQuickItem_Wrapper*)

    Q_DECLARE_INTERFACE(QQuickItem_Wrapper, "org.qcad.QQuickItem_Wrapper")

  
  #endif
  
