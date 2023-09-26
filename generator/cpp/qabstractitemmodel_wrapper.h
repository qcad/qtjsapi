
  // Auto generated
  
    #ifndef QABSTRACTITEMMODEL_H_WRAPPER
    #define QABSTRACTITEMMODEL_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QAbstractItemModel>
      
        #include <QMimeData>
      
        #include <QMap>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QModelIndex>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QModelIndex
    class QModelIndex_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QModelIndex_Wrapper(const QModelIndex_Wrapper&);

    public:
      // initialization of QModelIndex:
      static void init(RJSApi& handler);

      
        static QModelIndex* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QModelIndex.length(); i++) {
            RJSBasecaster_QModelIndex* basecaster = basecasters_QModelIndex[i];
            QModelIndex* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QModelIndex::getIdStatic()) {
            return (QModelIndex*)vp;
          }

          qWarning() << "QModelIndex::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QModelIndex* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QModelIndex*: wrapper wraps NULL";
          }

          QModelIndex* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QModelIndex*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QModelIndex_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QModelIndex_Wrapper(RJSApi& h, QModelIndex* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QModelIndex_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QModelIndex
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
            
    // Class: QModelIndex
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
            
    // Class: QModelIndex
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
            
    // Class: QModelIndex
    // Function: sibling
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sibling
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
            
    // Class: QModelIndex
    // Function: siblingAtColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  siblingAtColumn
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QModelIndex
    // Function: siblingAtRow
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  siblingAtRow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QModelIndex
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
            
    // Class: QModelIndex
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
            
    // Class: QModelIndex
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QModelIndex::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QModelIndex* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QModelIndex* getWrapped() const {
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
        QModelIndex* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QModelIndex*> basecasters_QModelIndex;

      public:
        static void registerBasecaster_QModelIndex(RJSBasecaster_QModelIndex* bc) {
          basecasters_QModelIndex.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QModelIndex_Wrapper*)

    Q_DECLARE_INTERFACE(QModelIndex_Wrapper, "org.qcad.QModelIndex_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QAbstractItemModel>
      
      // singleton class wrapper for static functions:
      class QAbstractItemModel_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QAbstractItemModel_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QAbstractItemModel
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
            

      private:
          RJSApi& handler;
          //static QAbstractItemModel_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QAbstractItemModel
    class QAbstractItemModel_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )


    private:
      // disable copy constructor:
      QAbstractItemModel_Wrapper(const QAbstractItemModel_Wrapper&);

    public:
      // initialization of QAbstractItemModel:
      static void init(RJSApi& handler);

      
        static QAbstractItemModel* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QAbstractTableModel::getIdStatic()) {
                return (QAbstractItemModel*)(QAbstractTableModel*)vp;
              }
              
              if (t==RJSType_QAbstractListModel::getIdStatic()) {
                return (QAbstractItemModel*)(QAbstractListModel*)vp;
              }
              
              if (t==RJSType_QFileSystemModel::getIdStatic()) {
                return (QAbstractItemModel*)(QFileSystemModel*)vp;
              }
              
              if (t==RJSType_QSortFilterProxyModel::getIdStatic()) {
                return (QAbstractItemModel*)(QSortFilterProxyModel*)vp;
              }
              
              if (t==RJSType_QStandardItemModel::getIdStatic()) {
                return (QAbstractItemModel*)(QStandardItemModel*)vp;
              }
              

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QAbstractItemModel.length(); i++) {
            RJSBasecaster_QAbstractItemModel* basecaster = basecasters_QAbstractItemModel[i];
            QAbstractItemModel* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QAbstractItemModel::getIdStatic()) {
            return (QAbstractItemModel*)vp;
          }

          qWarning() << "QAbstractItemModel::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QAbstractItemModel* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QAbstractItemModel*: wrapper wraps NULL";
          }

          QAbstractItemModel* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QAbstractItemModel*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum LayoutChangeHint {
    NoLayoutChangeHint = QAbstractItemModel::NoLayoutChangeHint,
VerticalSortHint = QAbstractItemModel::VerticalSortHint,
HorizontalSortHint = QAbstractItemModel::HorizontalSortHint,

  };
  Q_ENUM(LayoutChangeHint)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QAbstractItemModel_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QAbstractItemModel_Wrapper(RJSApi& h, QAbstractItemModel* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QAbstractItemModel_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
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
            
    // Class: QAbstractItemModel
    // Function: hasIndex
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasIndex
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
            
    // Class: QAbstractItemModel
    // Function: index
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  index
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
            
    // Class: QAbstractItemModel
    // Function: sibling
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sibling
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
            
    // Class: QAbstractItemModel
    // Function: rowCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rowCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: columnCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: hasChildren
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildren
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  data
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
            
    // Class: QAbstractItemModel
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 3
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
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractItemModel
    // Function: headerData
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  headerData
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
            
    // Class: QAbstractItemModel
    // Function: setHeaderData
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeaderData
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
            
    // Class: QAbstractItemModel
    // Function: clearItemData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearItemData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractItemModel
    // Function: mimeTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mimeTypes
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: supportedDropActions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedDropActions
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: supportedDragActions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedDragActions
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: insertRows
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertRows
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
            
    // Class: QAbstractItemModel
    // Function: insertColumns
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertColumns
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
            
    // Class: QAbstractItemModel
    // Function: removeRows
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeRows
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
            
    // Class: QAbstractItemModel
    // Function: removeColumns
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeColumns
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
            
    // Class: QAbstractItemModel
    // Function: moveRows
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveRows
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
            
    // Class: QAbstractItemModel
    // Function: moveColumns
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveColumns
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
            
    // Class: QAbstractItemModel
    // Function: insertRow
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertRow
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
            
    // Class: QAbstractItemModel
    // Function: insertColumn
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertColumn
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
            
    // Class: QAbstractItemModel
    // Function: removeRow
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeRow
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
            
    // Class: QAbstractItemModel
    // Function: removeColumn
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeColumn
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
            
    // Class: QAbstractItemModel
    // Function: moveRow
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveRow
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
            
    // Class: QAbstractItemModel
    // Function: moveColumn
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveColumn
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
            
    // Class: QAbstractItemModel
    // Function: fetchMore
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fetchMore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractItemModel
    // Function: canFetchMore
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  canFetchMore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: flags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: sort
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sort
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
            
    // Class: QAbstractItemModel
    // Function: buddy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buddy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: span
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  span
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractItemModel
    // Function: headerDataChanged
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void headerDataChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void headerDataChangedEmitter(
                Qt::Orientation orientation, int first, int last
              );
            
    // Class: QAbstractItemModel
    // Function: rowsInserted
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void rowsInserted(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void rowsInsertedEmitter(
                const QModelIndex& parent, int first, int last
              );
            
    // Class: QAbstractItemModel
    // Function: submit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  submit
              (

                
              )
              
              ;
            
    // Class: QAbstractItemModel
    // Function: revert
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  revert
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QAbstractItemModel::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QAbstractItemModel* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QAbstractItemModel* getWrapped() const {
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
        QAbstractItemModel* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QAbstractItemModel*> basecasters_QAbstractItemModel;

      public:
        static void registerBasecaster_QAbstractItemModel(RJSBasecaster_QAbstractItemModel* bc) {
          basecasters_QAbstractItemModel.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QAbstractItemModel_Wrapper*)

    Q_DECLARE_INTERFACE(QAbstractItemModel_Wrapper, "org.qcad.QAbstractItemModel_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QAbstractTableModel>
      
      // singleton class wrapper for static functions:
      class QAbstractTableModel_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QAbstractTableModel_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QAbstractTableModel
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
            

      private:
          RJSApi& handler;
          //static QAbstractTableModel_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QAbstractTableModel
    class QAbstractTableModel_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )


    private:
      // disable copy constructor:
      QAbstractTableModel_Wrapper(const QAbstractTableModel_Wrapper&);

    public:
      // initialization of QAbstractTableModel:
      static void init(RJSApi& handler);

      
        static QAbstractTableModel* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QAbstractTableModel.length(); i++) {
            RJSBasecaster_QAbstractTableModel* basecaster = basecasters_QAbstractTableModel[i];
            QAbstractTableModel* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QAbstractTableModel::getIdStatic()) {
            return (QAbstractTableModel*)vp;
          }

          qWarning() << "QAbstractTableModel::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QAbstractTableModel* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QAbstractTableModel*: wrapper wraps NULL";
          }

          QAbstractTableModel* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QAbstractTableModel*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum LayoutChangeHint {
    NoLayoutChangeHint = QAbstractTableModel::NoLayoutChangeHint,
VerticalSortHint = QAbstractTableModel::VerticalSortHint,
HorizontalSortHint = QAbstractTableModel::HorizontalSortHint,

  };
  Q_ENUM(LayoutChangeHint)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QAbstractTableModel_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QAbstractTableModel_Wrapper(RJSApi& h, QAbstractTableModel* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QAbstractTableModel_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
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
            
    // Class: QAbstractTableModel
    // Function: hasIndex
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasIndex
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
            
    // Class: QAbstractTableModel
    // Function: rowCount
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rowCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractTableModel
    // Function: columnCount
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractTableModel
    // Function: data
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  data
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
            
    // Class: QAbstractTableModel
    // Function: setData
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
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
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractTableModel
    // Function: headerData
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  headerData
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
            
    // Class: QAbstractTableModel
    // Function: setHeaderData
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeaderData
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
            
    // Class: QAbstractTableModel
    // Function: clearItemData
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearItemData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractTableModel
    // Function: mimeTypes
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mimeTypes
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractTableModel
    // Function: supportedDropActions
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedDropActions
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractTableModel
    // Function: supportedDragActions
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedDragActions
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractTableModel
    // Function: insertRows
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertRows
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
            
    // Class: QAbstractTableModel
    // Function: insertColumns
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertColumns
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
            
    // Class: QAbstractTableModel
    // Function: removeRows
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeRows
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
            
    // Class: QAbstractTableModel
    // Function: removeColumns
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeColumns
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
            
    // Class: QAbstractTableModel
    // Function: moveRows
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveRows
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
            
    // Class: QAbstractTableModel
    // Function: moveColumns
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveColumns
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
            
    // Class: QAbstractTableModel
    // Function: insertRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertRow
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
            
    // Class: QAbstractTableModel
    // Function: insertColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertColumn
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
            
    // Class: QAbstractTableModel
    // Function: removeRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeRow
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
            
    // Class: QAbstractTableModel
    // Function: removeColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeColumn
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
            
    // Class: QAbstractTableModel
    // Function: moveRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveRow
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
            
    // Class: QAbstractTableModel
    // Function: moveColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveColumn
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
            
    // Class: QAbstractTableModel
    // Function: fetchMore
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fetchMore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractTableModel
    // Function: canFetchMore
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  canFetchMore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractTableModel
    // Function: sort
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sort
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
            
    // Class: QAbstractTableModel
    // Function: buddy
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buddy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractTableModel
    // Function: span
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  span
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractTableModel
    // Function: headerDataChanged
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void headerDataChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void headerDataChangedEmitter(
                Qt::Orientation orientation, int first, int last
              );
            
    // Class: QAbstractTableModel
    // Function: rowsInserted
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void rowsInserted(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void rowsInsertedEmitter(
                const QModelIndex& parent, int first, int last
              );
            
    // Class: QAbstractTableModel
    // Function: submit
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  submit
              (

                
              )
              
              ;
            
    // Class: QAbstractTableModel
    // Function: revert
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  revert
              (

                
              )
              
              ;
            
    // Class: QAbstractTableModel
    // Function: index
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  index
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
            
    // Class: QAbstractTableModel
    // Function: sibling
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sibling
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
            
    // Class: QAbstractTableModel
    // Function: flags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
          return RJSType_QAbstractTableModel::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QAbstractTableModel* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QAbstractTableModel* getWrapped() const {
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
        QAbstractTableModel* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QAbstractTableModel*> basecasters_QAbstractTableModel;

      public:
        static void registerBasecaster_QAbstractTableModel(RJSBasecaster_QAbstractTableModel* bc) {
          basecasters_QAbstractTableModel.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QAbstractTableModel_Wrapper*)

    Q_DECLARE_INTERFACE(QAbstractTableModel_Wrapper, "org.qcad.QAbstractTableModel_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QAbstractListModel>
      
      // singleton class wrapper for static functions:
      class QAbstractListModel_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QAbstractListModel_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QAbstractListModel
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
            

      private:
          RJSApi& handler;
          //static QAbstractListModel_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QAbstractListModel
    class QAbstractListModel_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )


    private:
      // disable copy constructor:
      QAbstractListModel_Wrapper(const QAbstractListModel_Wrapper&);

    public:
      // initialization of QAbstractListModel:
      static void init(RJSApi& handler);

      
        static QAbstractListModel* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QAbstractListModel.length(); i++) {
            RJSBasecaster_QAbstractListModel* basecaster = basecasters_QAbstractListModel[i];
            QAbstractListModel* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QAbstractListModel::getIdStatic()) {
            return (QAbstractListModel*)vp;
          }

          qWarning() << "QAbstractListModel::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QAbstractListModel* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QAbstractListModel*: wrapper wraps NULL";
          }

          QAbstractListModel* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QAbstractListModel*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum LayoutChangeHint {
    NoLayoutChangeHint = QAbstractListModel::NoLayoutChangeHint,
VerticalSortHint = QAbstractListModel::VerticalSortHint,
HorizontalSortHint = QAbstractListModel::HorizontalSortHint,

  };
  Q_ENUM(LayoutChangeHint)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QAbstractListModel_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QAbstractListModel_Wrapper(RJSApi& h, QAbstractListModel* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QAbstractListModel_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
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
            
    // Class: QAbstractListModel
    // Function: hasIndex
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasIndex
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
            
    // Class: QAbstractListModel
    // Function: rowCount
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rowCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractListModel
    // Function: data
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  data
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
            
    // Class: QAbstractListModel
    // Function: setData
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
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
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractListModel
    // Function: headerData
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  headerData
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
            
    // Class: QAbstractListModel
    // Function: setHeaderData
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeaderData
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
            
    // Class: QAbstractListModel
    // Function: clearItemData
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearItemData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractListModel
    // Function: mimeTypes
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mimeTypes
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractListModel
    // Function: supportedDropActions
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedDropActions
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractListModel
    // Function: supportedDragActions
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedDragActions
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractListModel
    // Function: insertRows
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertRows
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
            
    // Class: QAbstractListModel
    // Function: insertColumns
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertColumns
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
            
    // Class: QAbstractListModel
    // Function: removeRows
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeRows
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
            
    // Class: QAbstractListModel
    // Function: removeColumns
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeColumns
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
            
    // Class: QAbstractListModel
    // Function: moveRows
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveRows
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
            
    // Class: QAbstractListModel
    // Function: moveColumns
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveColumns
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
            
    // Class: QAbstractListModel
    // Function: insertRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertRow
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
            
    // Class: QAbstractListModel
    // Function: insertColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertColumn
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
            
    // Class: QAbstractListModel
    // Function: removeRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeRow
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
            
    // Class: QAbstractListModel
    // Function: removeColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeColumn
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
            
    // Class: QAbstractListModel
    // Function: moveRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveRow
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
            
    // Class: QAbstractListModel
    // Function: moveColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveColumn
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
            
    // Class: QAbstractListModel
    // Function: fetchMore
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fetchMore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractListModel
    // Function: canFetchMore
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  canFetchMore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractListModel
    // Function: sort
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sort
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
            
    // Class: QAbstractListModel
    // Function: buddy
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buddy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractListModel
    // Function: span
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  span
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QAbstractListModel
    // Function: headerDataChanged
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void headerDataChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void headerDataChangedEmitter(
                Qt::Orientation orientation, int first, int last
              );
            
    // Class: QAbstractListModel
    // Function: rowsInserted
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void rowsInserted(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void rowsInsertedEmitter(
                const QModelIndex& parent, int first, int last
              );
            
    // Class: QAbstractListModel
    // Function: submit
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  submit
              (

                
              )
              
              ;
            
    // Class: QAbstractListModel
    // Function: revert
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  revert
              (

                
              )
              
              ;
            
    // Class: QAbstractListModel
    // Function: index
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  index
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
            
    // Class: QAbstractListModel
    // Function: sibling
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sibling
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
            
    // Class: QAbstractListModel
    // Function: flags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
          return RJSType_QAbstractListModel::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QAbstractListModel* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QAbstractListModel* getWrapped() const {
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
        QAbstractListModel* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QAbstractListModel*> basecasters_QAbstractListModel;

      public:
        static void registerBasecaster_QAbstractListModel(RJSBasecaster_QAbstractListModel* bc) {
          basecasters_QAbstractListModel.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QAbstractListModel_Wrapper*)

    Q_DECLARE_INTERFACE(QAbstractListModel_Wrapper, "org.qcad.QAbstractListModel_Wrapper")

  
  #endif
  