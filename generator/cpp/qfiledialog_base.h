

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QFILEDIALOG_H_BASE
  #define QFILEDIALOG_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QModelIndex>
  
    #include <QItemSelection>
  
    #include <QAbstractFileIconProvider>
  
    #include <QAbstractItemDelegate>
  
    #include <QAbstractProxyModel>
  
    #include <QQmlEngine>

    
        #include <QFileDialog>
      
    // Base class for QFileDialog
      class QFileDialog_Base : public QFileDialog {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QFileDialog
  // Function: 
  // Parameters: 4
  // preceding Parameters: -1
QFileDialog_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr, const QString& caption=QString(), const QString& directory=QString(), const QString& filter=QString()
      )
      
        : QFileDialog(
          parent, caption, directory, filter
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QFileDialog
  // Function: 
  // Parameters: 2
  // preceding Parameters: 4
QFileDialog_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent, Qt::WindowFlags f
      )
      
        : QFileDialog(
          parent, f
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(mimetype)

#endif

#if QT_CONFIG(proxymodel)

#endif

    // destructor:
    virtual ~QFileDialog_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  