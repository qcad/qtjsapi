
  // Auto generated
  
    #ifndef QSORTFILTERPROXYMODEL_H_WRAPPER
    #define QSORTFILTERPROXYMODEL_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSortFilterProxyModel>
      
      // singleton class wrapper for static functions:
      class QSortFilterProxyModel_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QSortFilterProxyModel_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QSortFilterProxyModel
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
          //static QSortFilterProxyModel_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSortFilterProxyModel
    class QSortFilterProxyModel_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )


    private:
      // disable copy constructor:
      QSortFilterProxyModel_Wrapper(const QSortFilterProxyModel_Wrapper&);

    public:
      // initialization of QSortFilterProxyModel:
      static void init(RJSApi& handler);

      
        static QSortFilterProxyModel* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QSortFilterProxyModel.length(); i++) {
            RJSBasecaster_QSortFilterProxyModel* basecaster = basecasters_QSortFilterProxyModel[i];
            QSortFilterProxyModel* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QSortFilterProxyModel::getIdStatic()) {
            return (QSortFilterProxyModel*)vp;
          }

          qWarning() << "QSortFilterProxyModel::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QSortFilterProxyModel* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSortFilterProxyModel*: wrapper wraps NULL";
          }

          QSortFilterProxyModel* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSortFilterProxyModel*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum LayoutChangeHint {
    NoLayoutChangeHint = QSortFilterProxyModel::NoLayoutChangeHint,
VerticalSortHint = QSortFilterProxyModel::VerticalSortHint,
HorizontalSortHint = QSortFilterProxyModel::HorizontalSortHint,

  };
  Q_ENUM(LayoutChangeHint)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSortFilterProxyModel_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSortFilterProxyModel_Wrapper(RJSApi& h, QSortFilterProxyModel* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSortFilterProxyModel_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSortFilterProxyModel
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSortFilterProxyModel_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
    // Function: setSourceModel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSourceModel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSortFilterProxyModel
    // Function: setFilterRegularExpression
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFilterRegularExpression
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSortFilterProxyModel
    // Function: setFilterWildcard
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFilterWildcard
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSortFilterProxyModel
    // Function: setFilterFixedString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFilterFixedString
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSortFilterProxyModel
    // Function: invalidate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  invalidate
              (

                
              )
              
              ;
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
    // Function: parent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
    // Function: mimeData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mimeData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSortFilterProxyModel
    // Function: dropMimeData
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dropMimeData
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
    // Function: match
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  match
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
              
                const
              
              ;
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
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
            
    // Class: QSortFilterProxyModel
    // Function: dynamicSortFilterChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void dynamicSortFilterChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void dynamicSortFilterChangedEmitter(
                bool dynamicSortFilter
              );
            
    // Class: QSortFilterProxyModel
    // Function: filterCaseSensitivityChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void filterCaseSensitivityChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void filterCaseSensitivityChangedEmitter(
                Qt::CaseSensitivity filterCaseSensitivity
              );
            
    // Class: QSortFilterProxyModel
    // Function: sortCaseSensitivityChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void sortCaseSensitivityChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void sortCaseSensitivityChangedEmitter(
                Qt::CaseSensitivity sortCaseSensitivity
              );
            
    // Class: QSortFilterProxyModel
    // Function: sortLocaleAwareChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void sortLocaleAwareChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void sortLocaleAwareChangedEmitter(
                bool sortLocaleAware
              );
            
    // Class: QSortFilterProxyModel
    // Function: sortRoleChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void sortRoleChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void sortRoleChangedEmitter(
                int sortRole
              );
            
    // Class: QSortFilterProxyModel
    // Function: filterRoleChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void filterRoleChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void filterRoleChangedEmitter(
                int filterRole
              );
            
    // Class: QSortFilterProxyModel
    // Function: recursiveFilteringEnabledChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void recursiveFilteringEnabledChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void recursiveFilteringEnabledChangedEmitter(
                bool recursiveFilteringEnabled
              );
            
    // Class: QSortFilterProxyModel
    // Function: autoAcceptChildRowsChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void autoAcceptChildRowsChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void autoAcceptChildRowsChangedEmitter(
                bool autoAcceptChildRows
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
          return RJSType_QSortFilterProxyModel::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QSortFilterProxyModel* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSortFilterProxyModel* getWrapped() const {
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
        QSortFilterProxyModel* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSortFilterProxyModel*> basecasters_QSortFilterProxyModel;

      public:
        static void registerBasecaster_QSortFilterProxyModel(RJSBasecaster_QSortFilterProxyModel* bc) {
          basecasters_QSortFilterProxyModel.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSortFilterProxyModel_Wrapper*)

    Q_DECLARE_INTERFACE(QSortFilterProxyModel_Wrapper, "org.qcad.QSortFilterProxyModel_Wrapper")

  
  #endif
  