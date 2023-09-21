
  // Auto generated
  
  #ifndef QTABLEWIDGET_H_WRAPPER
  #define QTABLEWIDGET_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
        #include <QTableWidget>
      
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTableWidgetItem>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTableWidgetItem
    class QTableWidgetItem_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTableWidgetItem_Wrapper(const QTableWidgetItem_Wrapper&);

    public:
      // initialization of QTableWidgetItem:
      static void init(RJSApi& handler);

      
        static QTableWidgetItem* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QTableWidgetItem_Type:
                return (QTableWidgetItem*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTableWidgetItem* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTableWidgetItem*: wrapper wraps NULL";
          }

          QTableWidgetItem* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTableWidgetItem*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ItemType {
    Type = QTableWidgetItem::Type,
UserType = QTableWidgetItem::UserType,

  };
  Q_ENUM(ItemType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTableWidgetItem_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTableWidgetItem_Wrapper(RJSApi& h, QTableWidgetItem* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTableWidgetItem_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTableWidgetItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTableWidgetItem_Wrapper
                
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
            
#if QT_CONFIG(tooltip)

#endif

#if QT_CONFIG(whatsthis)

#endif

#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#else

#endif

#if QT_DEPRECATED_SINCE(6,4)

#endif

#ifndef QT_NO_DATASTREAM

#endif


    // non-static functions:
    
    // Class: QTableWidgetItem
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: tableWidget
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tableWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
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
            
    // Class: QTableWidgetItem
    // Function: column
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  column
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setSelected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelected
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidgetItem
    // Function: isSelected
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSelected
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: flags
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flags
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setFlags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFlags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidgetItem
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  text
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidgetItem
    // Function: icon
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  icon
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setIcon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIcon
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidgetItem
    // Function: statusTip
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  statusTip
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setStatusTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStatusTip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_CONFIG(tooltip)

    // Class: QTableWidgetItem
    // Function: toolTip
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTip
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setToolTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setToolTip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

#if QT_CONFIG(whatsthis)

    // Class: QTableWidgetItem
    // Function: whatsThis
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  whatsThis
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setWhatsThis
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWhatsThis
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

    // Class: QTableWidgetItem
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
            
    // Class: QTableWidgetItem
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
            
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#else

#endif

#if QT_DEPRECATED_SINCE(6,4)

    // Class: QTableWidgetItem
    // Function: setTextAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

    // Class: QTableWidgetItem
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
            
    // Class: QTableWidgetItem
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
            
    // Class: QTableWidgetItem
    // Function: foreground
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  foreground
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setForeground
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setForeground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidgetItem
    // Function: checkState
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  checkState
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setCheckState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCheckState
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidgetItem
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
            
    // Class: QTableWidgetItem
    // Function: setSizeHint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSizeHint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidgetItem
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  data
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidgetItem
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setData
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
            
#ifndef QT_NO_DATASTREAM

#endif

    // Class: QTableWidgetItem
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidgetItem
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
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
          
              return RJSType::QTableWidgetItem_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QTableWidgetItem* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTableWidgetItem* getWrapped() const {
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
        QTableWidgetItem* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTableWidgetItem_Wrapper*)

    Q_DECLARE_INTERFACE(QTableWidgetItem_Wrapper, "org.qcad.QTableWidgetItem_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTableWidget>
      
      // singleton class wrapper for static functions:
      class QTableWidget_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QTableWidget_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QTableWidget
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tr
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
            
    // Class: QTableWidget
    // Function: setTabOrder
    // Source: QWidget
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTabOrder
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
            
    // Class: QTableWidget
    // Function: mouseGrabber
    // Source: QWidget
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mouseGrabber
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: keyboardGrabber
    // Source: QWidget
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keyboardGrabber
              (

                
              )
              
              ;
            
#if QT_CONFIG(draganddrop)

#endif


      private:
          RJSApi& handler;
          //static QTableWidget_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTableWidget
    class QTableWidget_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )

  Q_PROPERTY(
    
    QJSValue
     modal READ isModal
  )

  Q_PROPERTY(
    
    QJSValue
     windowModality READ windowModality WRITE setWindowModality
  )

  Q_PROPERTY(
    
    QJSValue
     enabled READ isEnabled WRITE setEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     geometry READ geometry WRITE setGeometry
  )

  Q_PROPERTY(
    
    QJSValue
     frameGeometry READ frameGeometry
  )

  Q_PROPERTY(
    
    QJSValue
     normalGeometry READ normalGeometry
  )

  Q_PROPERTY(
    
    QJSValue
     x READ x
  )

  Q_PROPERTY(
    
    QJSValue
     y READ y
  )

  Q_PROPERTY(
    
    QJSValue
     pos READ pos WRITE move
  )

  Q_PROPERTY(
    
    QJSValue
     frameSize READ frameSize
  )

  Q_PROPERTY(
    
    QJSValue
     size READ size WRITE resize
  )

  Q_PROPERTY(
    
    QJSValue
     width READ width
  )

  Q_PROPERTY(
    
    QJSValue
     height READ height
  )

  Q_PROPERTY(
    
    QJSValue
     rect READ rect
  )

  Q_PROPERTY(
    
    QJSValue
     childrenRect READ childrenRect
  )

  Q_PROPERTY(
    
    QJSValue
     childrenRegion READ childrenRegion
  )

  Q_PROPERTY(
    
    QJSValue
     sizePolicy READ sizePolicy WRITE setSizePolicy
  )

  Q_PROPERTY(
    
    QJSValue
     minimumSize READ minimumSize WRITE setMinimumSize
  )

  Q_PROPERTY(
    
    QJSValue
     maximumSize READ maximumSize WRITE setMaximumSize
  )

  Q_PROPERTY(
    
    QJSValue
     minimumWidth READ minimumWidth WRITE setMinimumWidth
  )

  Q_PROPERTY(
    
    QJSValue
     minimumHeight READ minimumHeight WRITE setMinimumHeight
  )

  Q_PROPERTY(
    
    QJSValue
     maximumWidth READ maximumWidth WRITE setMaximumWidth
  )

  Q_PROPERTY(
    
    QJSValue
     maximumHeight READ maximumHeight WRITE setMaximumHeight
  )

  Q_PROPERTY(
    
    QJSValue
     sizeIncrement READ sizeIncrement WRITE setSizeIncrement
  )

  Q_PROPERTY(
    
    QJSValue
     baseSize READ baseSize WRITE setBaseSize
  )

  Q_PROPERTY(
    
    QJSValue
     palette READ palette WRITE setPalette
  )

  Q_PROPERTY(
    
    QJSValue
     font READ font WRITE setFont
  )

  Q_PROPERTY(
    
    QJSValue
     cursor READ cursor WRITE setCursor
  )

  Q_PROPERTY(
    
    QJSValue
     mouseTracking READ hasMouseTracking WRITE setMouseTracking
  )

  Q_PROPERTY(
    
    QJSValue
     tabletTracking READ hasTabletTracking WRITE setTabletTracking
  )

  Q_PROPERTY(
    
    QJSValue
     isActiveWindow READ isActiveWindow
  )

  Q_PROPERTY(
    
    QJSValue
     focusPolicy READ focusPolicy WRITE setFocusPolicy
  )

  Q_PROPERTY(
    
    QJSValue
     focus READ hasFocus
  )

  Q_PROPERTY(
    
    QJSValue
     contextMenuPolicy READ contextMenuPolicy WRITE setContextMenuPolicy
  )

  Q_PROPERTY(
    
    QJSValue
     updatesEnabled READ updatesEnabled WRITE setUpdatesEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     visible READ isVisible WRITE setVisible
  )

  Q_PROPERTY(
    
    QJSValue
     minimized READ isMinimized
  )

  Q_PROPERTY(
    
    QJSValue
     maximized READ isMaximized
  )

  Q_PROPERTY(
    
    QJSValue
     fullScreen READ isFullScreen
  )

  Q_PROPERTY(
    
    QJSValue
     sizeHint READ sizeHint
  )

  Q_PROPERTY(
    
    QJSValue
     minimumSizeHint READ minimumSizeHint
  )

  Q_PROPERTY(
    
    QJSValue
     acceptDrops READ acceptDrops WRITE setAcceptDrops
  )

  Q_PROPERTY(
    
    QJSValue
     windowTitle READ windowTitle WRITE setWindowTitle
  )

  Q_PROPERTY(
    
    QJSValue
     windowIcon READ windowIcon WRITE setWindowIcon
  )

  Q_PROPERTY(
    
    QJSValue
     windowIconText READ windowIconText WRITE setWindowIconText
  )

  Q_PROPERTY(
    
    QJSValue
     windowOpacity READ windowOpacity WRITE setWindowOpacity
  )

  Q_PROPERTY(
    
    QJSValue
     windowModified READ isWindowModified WRITE setWindowModified
  )

  Q_PROPERTY(
    
    QJSValue
     toolTip READ toolTip WRITE setToolTip
  )

  Q_PROPERTY(
    
    QJSValue
     toolTipDuration READ toolTipDuration WRITE setToolTipDuration
  )

  Q_PROPERTY(
    
    QJSValue
     statusTip READ statusTip WRITE setStatusTip
  )

  Q_PROPERTY(
    
    QJSValue
     whatsThis READ whatsThis WRITE setWhatsThis
  )

  Q_PROPERTY(
    
    QJSValue
     accessibleName READ accessibleName WRITE setAccessibleName
  )

  Q_PROPERTY(
    
    QJSValue
     accessibleDescription READ accessibleDescription WRITE setAccessibleDescription
  )

  Q_PROPERTY(
    
    QJSValue
     layoutDirection READ layoutDirection WRITE setLayoutDirection
  )

  Q_PROPERTY(
    
    QJSValue
     autoFillBackground READ autoFillBackground WRITE setAutoFillBackground
  )

  Q_PROPERTY(
    
    QJSValue
     styleSheet READ styleSheet WRITE setStyleSheet
  )

  Q_PROPERTY(
    
    QJSValue
     locale READ locale WRITE setLocale
  )

  Q_PROPERTY(
    
    QJSValue
     windowFilePath READ windowFilePath WRITE setWindowFilePath
  )

  Q_PROPERTY(
    
    QJSValue
     inputMethodHints READ inputMethodHints WRITE setInputMethodHints
  )

  Q_PROPERTY(
    
    QJSValue
     autoScrollMargin READ autoScrollMargin WRITE setAutoScrollMargin
  )

  Q_PROPERTY(
    
    QJSValue
     editTriggers READ editTriggers WRITE setEditTriggers
  )

  Q_PROPERTY(
    
    QJSValue
     tabKeyNavigation READ tabKeyNavigation WRITE setTabKeyNavigation
  )

  Q_PROPERTY(
    
    QJSValue
     showDropIndicator READ showDropIndicator WRITE setDropIndicatorShown
  )

  Q_PROPERTY(
    
    QJSValue
     dragEnabled READ dragEnabled WRITE setDragEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     dragDropOverwriteMode READ dragDropOverwriteMode WRITE setDragDropOverwriteMode
  )

  Q_PROPERTY(
    
    QJSValue
     dragDropMode READ dragDropMode WRITE setDragDropMode
  )

  Q_PROPERTY(
    
    QJSValue
     defaultDropAction READ defaultDropAction WRITE setDefaultDropAction
  )

  Q_PROPERTY(
    
    QJSValue
     alternatingRowColors READ alternatingRowColors WRITE setAlternatingRowColors
  )

  Q_PROPERTY(
    
    QJSValue
     selectionMode READ selectionMode WRITE setSelectionMode
  )

  Q_PROPERTY(
    
    QJSValue
     selectionBehavior READ selectionBehavior WRITE setSelectionBehavior
  )

  Q_PROPERTY(
    
    QJSValue
     iconSize READ iconSize WRITE setIconSize
  )

  Q_PROPERTY(
    
    QJSValue
     textElideMode READ textElideMode WRITE setTextElideMode
  )

  Q_PROPERTY(
    
    QJSValue
     verticalScrollMode READ verticalScrollMode WRITE setVerticalScrollMode
  )

  Q_PROPERTY(
    
    QJSValue
     horizontalScrollMode READ horizontalScrollMode WRITE setHorizontalScrollMode
  )

  Q_PROPERTY(
    
    QJSValue
     gridStyle READ gridStyle WRITE setGridStyle
  )

  Q_PROPERTY(
    
    QJSValue
     sortingEnabled READ isSortingEnabled WRITE setSortingEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     wordWrap READ wordWrap WRITE setWordWrap
  )

  Q_PROPERTY(
    
    QJSValue
     cornerButtonEnabled READ isCornerButtonEnabled WRITE setCornerButtonEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     columnCount READ columnCount WRITE setColumnCount
  )

  Q_PROPERTY(
    
    QJSValue
     rowCount READ rowCount WRITE setRowCount
  )


    private:
      // disable copy constructor:
      QTableWidget_Wrapper(const QTableWidget_Wrapper&);

    public:
      // initialization of QTableWidget:
      static void init(RJSApi& handler);

      
        static QTableWidget* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QTableWidget_Type:
                return (QTableWidget*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTableWidget* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTableWidget*: wrapper wraps NULL";
          }

          QTableWidget* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTableWidget*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum SizeAdjustPolicy {
    AdjustIgnored = QTableWidget::AdjustIgnored,
AdjustToContentsOnFirstShow = QTableWidget::AdjustToContentsOnFirstShow,
AdjustToContents = QTableWidget::AdjustToContents,

  };
  Q_ENUM(SizeAdjustPolicy)

  enum SelectionMode {
    NoSelection = QTableWidget::NoSelection,
SingleSelection = QTableWidget::SingleSelection,
MultiSelection = QTableWidget::MultiSelection,
ExtendedSelection = QTableWidget::ExtendedSelection,
ContiguousSelection = QTableWidget::ContiguousSelection,

  };
  Q_ENUM(SelectionMode)

  enum SelectionBehavior {
    SelectItems = QTableWidget::SelectItems,
SelectRows = QTableWidget::SelectRows,
SelectColumns = QTableWidget::SelectColumns,

  };
  Q_ENUM(SelectionBehavior)

  enum ScrollHint {
    EnsureVisible = QTableWidget::EnsureVisible,
PositionAtTop = QTableWidget::PositionAtTop,
PositionAtBottom = QTableWidget::PositionAtBottom,
PositionAtCenter = QTableWidget::PositionAtCenter,

  };
  Q_ENUM(ScrollHint)

  enum EditTrigger {
    NoEditTriggers = QTableWidget::NoEditTriggers,
CurrentChanged = QTableWidget::CurrentChanged,
DoubleClicked = QTableWidget::DoubleClicked,
SelectedClicked = QTableWidget::SelectedClicked,
EditKeyPressed = QTableWidget::EditKeyPressed,
AnyKeyPressed = QTableWidget::AnyKeyPressed,
AllEditTriggers = QTableWidget::AllEditTriggers,

  };
  Q_ENUM(EditTrigger)

  enum ScrollMode {
    ScrollPerItem = QTableWidget::ScrollPerItem,
ScrollPerPixel = QTableWidget::ScrollPerPixel,

  };
  Q_ENUM(ScrollMode)

  enum DragDropMode {
    NoDragDrop = QTableWidget::NoDragDrop,
DragOnly = QTableWidget::DragOnly,
DropOnly = QTableWidget::DropOnly,
DragDrop = QTableWidget::DragDrop,
InternalMove = QTableWidget::InternalMove,

  };
  Q_ENUM(DragDropMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTableWidget_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTableWidget_Wrapper(RJSApi& h, QTableWidget* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTableWidget_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#if QT_CONFIG(draganddrop)

#endif


    // non-static functions:
    
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
    // Function: devType
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: createWinId
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createWinId
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: isWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindow
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isModal
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isModal
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: windowModality
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowModality
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowModality
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowModality
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: isEnabled
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: isEnabledTo
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEnabledTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setEnabled
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: setDisabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDisabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowModified
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowModified
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: frameGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameGeometry
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: geometry
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: normalGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalGeometry
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: x
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: y
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: pos
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pos
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: frameSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: size
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: width
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: height
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: rect
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: childrenRect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childrenRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: childrenRegion
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childrenRegion
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: minimumSize
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: maximumSize
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: minimumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: minimumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: maximumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: maximumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setMinimumSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinimumSize
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
            
    // Class: QTableWidget
    // Function: setMaximumSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumSize
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
            
    // Class: QTableWidget
    // Function: setMinimumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinimumWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setMinimumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinimumHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setMaximumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setMaximumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: sizeIncrement
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeIncrement
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setSizeIncrement
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSizeIncrement
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
            
    // Class: QTableWidget
    // Function: baseSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baseSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setBaseSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaseSize
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
            
    // Class: QTableWidget
    // Function: setFixedSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFixedSize
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
            
    // Class: QTableWidget
    // Function: setFixedWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFixedWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setFixedHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFixedHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: mapToGlobal
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapToGlobal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: mapFromGlobal
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapFromGlobal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: mapToParent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapToParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: mapFromParent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapFromParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: mapTo
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapTo
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
            
    // Class: QTableWidget
    // Function: mapFrom
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapFrom
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
            
    // Class: QTableWidget
    // Function: window
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: nativeParentWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nativeParentWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: topLevelWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topLevelWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: palette
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  palette
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setPalette
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPalette
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setBackgroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackgroundRole
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: backgroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  backgroundRole
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setForegroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setForegroundRole
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: foregroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  foregroundRole
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: font
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: setFont
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: fontInfo
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: cursor
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: setCursor
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: unsetCursor
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: setMouseTracking
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMouseTracking
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: hasMouseTracking
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasMouseTracking
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: underMouse
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  underMouse
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setTabletTracking
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTabletTracking
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: hasTabletTracking
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasTabletTracking
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setMask
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: mask
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: clearMask
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearMask
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: grab
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grab
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: grabGesture
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabGesture
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
            
    // Class: QTableWidget
    // Function: ungrabGesture
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ungrabGesture
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowTitle
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowTitle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setStyleSheet
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyleSheet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: styleSheet
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  styleSheet
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: windowTitle
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowTitle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowIcon
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowIcon
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: windowIcon
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowIcon
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowIconText
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowIconText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: windowIconText
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowIconText
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowRole
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: windowRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowRole
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowFilePath
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowFilePath
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: windowFilePath
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowFilePath
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowOpacity
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowOpacity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: windowOpacity
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowOpacity
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isWindowModified
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindowModified
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setToolTip
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setToolTip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: toolTip
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTip
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setToolTipDuration
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setToolTipDuration
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: toolTipDuration
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTipDuration
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setStatusTip
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStatusTip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: statusTip
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  statusTip
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWhatsThis
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWhatsThis
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: whatsThis
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  whatsThis
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: accessibleName
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accessibleName
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setAccessibleName
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccessibleName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: accessibleDescription
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accessibleDescription
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setAccessibleDescription
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccessibleDescription
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setLayoutDirection
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: layoutDirection
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: unsetLayoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unsetLayoutDirection
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setLocale
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLocale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: locale
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  locale
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: unsetLocale
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unsetLocale
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: isRightToLeft
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRightToLeft
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isLeftToRight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isLeftToRight
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isActiveWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isActiveWindow
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: activateWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  activateWindow
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: clearFocus
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearFocus
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setFocus
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocus
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: focusPolicy
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: setFocusPolicy
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: hasFocus
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: setFocusProxy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocusProxy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: focusProxy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focusProxy
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: contextMenuPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contextMenuPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setContextMenuPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setContextMenuPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: grabMouse
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabMouse
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: releaseMouse
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  releaseMouse
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: grabKeyboard
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabKeyboard
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: releaseKeyboard
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  releaseKeyboard
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: grabShortcut
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabShortcut
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
            
    // Class: QTableWidget
    // Function: releaseShortcut
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  releaseShortcut
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setShortcutEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setShortcutEnabled
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
            
    // Class: QTableWidget
    // Function: setShortcutAutoRepeat
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setShortcutAutoRepeat
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
            
    // Class: QTableWidget
    // Function: updatesEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updatesEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setUpdatesEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUpdatesEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: repaint
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  repaint
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
            
    // Class: QTableWidget
    // Function: setVisible
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: setHidden
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHidden
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: show
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  show
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: hide
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hide
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: showMinimized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showMinimized
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: showMaximized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showMaximized
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: showFullScreen
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showFullScreen
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: showNormal
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showNormal
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: close
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  close
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: raise
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  raise
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: lower
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lower
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: stackUnder
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stackUnder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: move
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  move
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
            
    // Class: QTableWidget
    // Function: resize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resize
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
            
    // Class: QTableWidget
    // Function: setGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGeometry
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
            
    // Class: QTableWidget
    // Function: saveGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  saveGeometry
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: restoreGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  restoreGeometry
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: adjustSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  adjustSize
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: isVisible
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: isVisibleTo
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVisibleTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isHidden
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isHidden
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isMinimized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isMinimized
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isMaximized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isMaximized
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isFullScreen
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFullScreen
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: windowState
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowState
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowState
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowState
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: overrideWindowState
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  overrideWindowState
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: sizePolicy
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: setSizePolicy
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSizePolicy
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
            
    // Class: QTableWidget
    // Function: heightForWidth
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: hasHeightForWidth
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: visibleRegion
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visibleRegion
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setContentsMargins
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setContentsMargins
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
            
    // Class: QTableWidget
    // Function: contentsMargins
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contentsMargins
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: contentsRect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contentsRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: layout
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layout
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setLayout
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayout
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: updateGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateGeometry
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setParent
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParent
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
            
    // Class: QTableWidget
    // Function: scroll
    // Source: QWidget
    // Static: false
    // Parameters: 3
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
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: focusWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focusWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: nextInFocusChain
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextInFocusChain
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: previousInFocusChain
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousInFocusChain
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: acceptDrops
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  acceptDrops
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setAcceptDrops
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAcceptDrops
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: addAction
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: addActions
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addActions
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: insertActions
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertActions
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
            
    // Class: QTableWidget
    // Function: insertAction
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAction
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
            
    // Class: QTableWidget
    // Function: removeAction
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: actions
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  actions
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: parentWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowFlags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: windowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowFlags
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setWindowFlag
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowFlag
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
            
    // Class: QTableWidget
    // Function: overrideWindowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  overrideWindowFlags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: windowType
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: childAt
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: setAttribute
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAttribute
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
            
    // Class: QTableWidget
    // Function: testAttribute
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  testAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: paintEngine
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: ensurePolished
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ensurePolished
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isAncestorOf
    // Source: QWidget
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
            
    // Class: QTableWidget
    // Function: autoFillBackground
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  autoFillBackground
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setAutoFillBackground
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoFillBackground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: customContextMenuRequested
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void customContextMenuRequested(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void customContextMenuRequestedEmitter(
                const QPoint& pos
              );
            
    // Class: QTableWidget
    // Function: inputMethodHints
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  inputMethodHints
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setInputMethodHints
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInputMethodHints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: frameStyle
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setFrameStyle
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFrameStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: frameWidth
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: frameShape
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameShape
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setFrameShape
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFrameShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: frameShadow
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameShadow
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setFrameShadow
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFrameShadow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: lineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setLineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLineWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: midLineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  midLineWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setMidLineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMidLineWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: frameRect
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setFrameRect
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFrameRect
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: verticalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalScrollBarPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setVerticalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalScrollBarPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: verticalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalScrollBar
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setVerticalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalScrollBar
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: horizontalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalScrollBarPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setHorizontalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalScrollBarPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: horizontalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalScrollBar
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setHorizontalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalScrollBar
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: cornerWidget
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cornerWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setCornerWidget
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCornerWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: addScrollBarWidget
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addScrollBarWidget
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
            
    // Class: QTableWidget
    // Function: viewport
    // Source: QAbstractScrollArea
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
            
    // Class: QTableWidget
    // Function: setViewport
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setViewport
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: maximumViewportSize
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumViewportSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: minimumSizeHint
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumSizeHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: sizeHint
    // Source: QAbstractScrollArea
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
            
    // Class: QTableWidget
    // Function: setupViewport
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setupViewport
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: sizeAdjustPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeAdjustPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setSizeAdjustPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSizeAdjustPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: model
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  model
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: selectionModel
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionModel
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setItemDelegate
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setItemDelegate
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setSelectionMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelectionMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: selectionMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setSelectionBehavior
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelectionBehavior
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: selectionBehavior
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionBehavior
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: currentIndex
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: rootIndex
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rootIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setEditTriggers
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEditTriggers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: editTriggers
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  editTriggers
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setVerticalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalScrollMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: verticalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalScrollMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: resetVerticalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetVerticalScrollMode
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setHorizontalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalScrollMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: horizontalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalScrollMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: resetHorizontalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetHorizontalScrollMode
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setAutoScroll
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoScroll
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: hasAutoScroll
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAutoScroll
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setAutoScrollMargin
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoScrollMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: autoScrollMargin
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  autoScrollMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setTabKeyNavigation
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTabKeyNavigation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: tabKeyNavigation
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tabKeyNavigation
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setDropIndicatorShown
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDropIndicatorShown
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: showDropIndicator
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showDropIndicator
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setDragEnabled
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDragEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: dragEnabled
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dragEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setDragDropOverwriteMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDragDropOverwriteMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: dragDropOverwriteMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dragDropOverwriteMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setDragDropMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDragDropMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: dragDropMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dragDropMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setDefaultDropAction
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefaultDropAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: defaultDropAction
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultDropAction
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setAlternatingRowColors
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlternatingRowColors
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: alternatingRowColors
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alternatingRowColors
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setIconSize
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIconSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: iconSize
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  iconSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setTextElideMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextElideMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: textElideMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textElideMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: keyboardSearch
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keyboardSearch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setIndexWidget
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIndexWidget
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
            
    // Class: QTableWidget
    // Function: indexWidget
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  indexWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: inputMethodQuery
    // Source: QAbstractItemView
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
            
    // Class: QTableWidget
    // Function: reset
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reset
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: selectAll
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectAll
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: edit
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  edit
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: clearSelection
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearSelection
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setCurrentIndex
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: scrollToTop
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scrollToTop
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: scrollToBottom
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scrollToBottom
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: update
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: doubleClicked
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void doubleClicked(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void doubleClickedEmitter(
                const QModelIndex& index
              );
            
    // Class: QTableWidget
    // Function: setRootIndex
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRootIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setSelectionModel
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelectionModel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: doItemsLayout
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  doItemsLayout
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: horizontalHeader
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalHeader
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: verticalHeader
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalHeader
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setHorizontalHeader
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalHeader
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setVerticalHeader
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalHeader
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: rowViewportPosition
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rowViewportPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: rowAt
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rowAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setRowHeight
    // Source: QTableView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRowHeight
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
            
    // Class: QTableWidget
    // Function: rowHeight
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rowHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: columnViewportPosition
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnViewportPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: columnAt
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setColumnWidth
    // Source: QTableView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColumnWidth
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
            
    // Class: QTableWidget
    // Function: columnWidth
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: isRowHidden
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRowHidden
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setRowHidden
    // Source: QTableView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRowHidden
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
            
    // Class: QTableWidget
    // Function: isColumnHidden
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isColumnHidden
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setColumnHidden
    // Source: QTableView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColumnHidden
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
            
    // Class: QTableWidget
    // Function: showGrid
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showGrid
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: gridStyle
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  gridStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setGridStyle
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGridStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setWordWrap
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWordWrap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: wordWrap
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  wordWrap
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setCornerButtonEnabled
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCornerButtonEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: isCornerButtonEnabled
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCornerButtonEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: visualRect
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visualRect
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: scrollTo
    // Source: QTableView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scrollTo
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
            
    // Class: QTableWidget
    // Function: indexAt
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  indexAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setSpan
    // Source: QTableView
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSpan
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
            
    // Class: QTableWidget
    // Function: rowSpan
    // Source: QTableView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rowSpan
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
            
    // Class: QTableWidget
    // Function: columnSpan
    // Source: QTableView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnSpan
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
            
    // Class: QTableWidget
    // Function: clearSpans
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearSpans
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: selectRow
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectRow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: selectColumn
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectColumn
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: hideRow
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hideRow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: hideColumn
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hideColumn
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: showRow
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showRow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: showColumn
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showColumn
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: resizeRowToContents
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resizeRowToContents
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: resizeRowsToContents
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resizeRowsToContents
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: resizeColumnToContents
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resizeColumnToContents
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: resizeColumnsToContents
    // Source: QTableView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resizeColumnsToContents
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: sortByColumn
    // Source: QTableView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sortByColumn
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
            
    // Class: QTableWidget
    // Function: setShowGrid
    // Source: QTableView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setShowGrid
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setRowCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRowCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: rowCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rowCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setColumnCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColumnCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: columnCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: row
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  row
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: column
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  column
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: item
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  item
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
            
    // Class: QTableWidget
    // Function: setItem
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setItem
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
            
    // Class: QTableWidget
    // Function: takeItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  takeItem
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
            
    // Class: QTableWidget
    // Function: indexFromItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  indexFromItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: itemFromIndex
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  itemFromIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: verticalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalHeaderItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setVerticalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalHeaderItem
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
            
    // Class: QTableWidget
    // Function: takeVerticalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  takeVerticalHeaderItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: horizontalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalHeaderItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setHorizontalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalHeaderItem
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
            
    // Class: QTableWidget
    // Function: takeHorizontalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  takeHorizontalHeaderItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setVerticalHeaderLabels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalHeaderLabels
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: setHorizontalHeaderLabels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalHeaderLabels
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: currentRow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentRow
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: currentColumn
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentColumn
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: currentItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentItem
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setCurrentItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentItem
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
            
    // Class: QTableWidget
    // Function: setCurrentCell
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentCell
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
            
    // Class: QTableWidget
    // Function: sortItems
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sortItems
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
            
    // Class: QTableWidget
    // Function: setSortingEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSortingEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: isSortingEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSortingEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: editItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  editItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: openPersistentEditor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  openPersistentEditor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: closePersistentEditor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  closePersistentEditor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: isPersistentEditorOpen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPersistentEditorOpen
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: cellWidget
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cellWidget
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
            
    // Class: QTableWidget
    // Function: setCellWidget
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCellWidget
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
            
    // Class: QTableWidget
    // Function: removeCellWidget
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeCellWidget
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
            
    // Class: QTableWidget
    // Function: visualRow
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visualRow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: visualColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visualColumn
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: itemAt
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  itemAt
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
            
    // Class: QTableWidget
    // Function: visualItemRect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visualItemRect
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTableWidget
    // Function: setItemPrototype
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setItemPrototype
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: scrollToItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scrollToItem
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
            
    // Class: QTableWidget
    // Function: insertRow
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertRow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: insertColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertColumn
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: removeRow
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeRow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
    // Function: removeColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeColumn
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTableWidget
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
            
    // Class: QTableWidget
    // Function: clearContents
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearContents
              (

                
              )
              
              ;
            
    // Class: QTableWidget
    // Function: itemPressed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemPressed(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemPressedEmitter(
                QTableWidgetItem* item
              );
            
    // Class: QTableWidget
    // Function: itemClicked
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemClicked(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemClickedEmitter(
                QTableWidgetItem* item
              );
            
    // Class: QTableWidget
    // Function: itemDoubleClicked
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemDoubleClicked(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemDoubleClickedEmitter(
                QTableWidgetItem* item
              );
            
    // Class: QTableWidget
    // Function: itemActivated
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemActivated(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemActivatedEmitter(
                QTableWidgetItem* item
              );
            
    // Class: QTableWidget
    // Function: itemEntered
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemEntered(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemEnteredEmitter(
                QTableWidgetItem* item
              );
            
    // Class: QTableWidget
    // Function: itemChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemChangedEmitter(
                QTableWidgetItem* item
              );
            
    // Class: QTableWidget
    // Function: currentItemChanged
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void currentItemChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void currentItemChangedEmitter(
                QTableWidgetItem* current, QTableWidgetItem* previous
              );
            
    // Class: QTableWidget
    // Function: itemSelectionChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemSelectionChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemSelectionChangedEmitter(
                
              );
            
    // Class: QTableWidget
    // Function: cellPressed
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void cellPressed(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void cellPressedEmitter(
                int row, int column
              );
            
    // Class: QTableWidget
    // Function: cellClicked
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void cellClicked(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void cellClickedEmitter(
                int row, int column
              );
            
    // Class: QTableWidget
    // Function: cellDoubleClicked
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void cellDoubleClicked(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void cellDoubleClickedEmitter(
                int row, int column
              );
            
    // Class: QTableWidget
    // Function: cellActivated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void cellActivated(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void cellActivatedEmitter(
                int row, int column
              );
            
    // Class: QTableWidget
    // Function: cellEntered
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void cellEntered(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void cellEnteredEmitter(
                int row, int column
              );
            
    // Class: QTableWidget
    // Function: cellChanged
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void cellChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void cellChangedEmitter(
                int row, int column
              );
            
    // Class: QTableWidget
    // Function: currentCellChanged
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void currentCellChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void currentCellChangedEmitter(
                int currentRow, int currentColumn, int previousRow, int previousColumn
              );
            
#if QT_CONFIG(draganddrop)

#endif


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
          
              return RJSType::QTableWidget_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTableWidget* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTableWidget* getWrapped() const {
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
        QTableWidget* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTableWidget_Wrapper*)

    Q_DECLARE_INTERFACE(QTableWidget_Wrapper, "org.qcad.QTableWidget_Wrapper")

  
  #endif
  