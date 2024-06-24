

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QABSTRACTITEMMODEL_H_BASE
  #define QABSTRACTITEMMODEL_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QAbstractItemModel>
  
    #include <QMimeData>
  
    #include <QMap>
  
    #include <QQmlEngine>

    
        #include <QModelIndex>
      
    #include <QQmlEngine>

    
        #include <QAbstractItemModel>
      
    // Base class for QAbstractItemModel
      class QAbstractItemModel_Base : public QAbstractItemModel {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
    // destructor:
    virtual ~QAbstractItemModel_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
      //bool recFlag;

    };
    
    #include <QQmlEngine>

    
        #include <QAbstractTableModel>
      
    #include <QQmlEngine>

    
        #include <QAbstractListModel>
      
    // Base class for QAbstractListModel
      class QAbstractListModel_Base : public QAbstractListModel {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
    // destructor:
    virtual ~QAbstractListModel_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
      //bool recFlag;

    };
    
  #endif
  