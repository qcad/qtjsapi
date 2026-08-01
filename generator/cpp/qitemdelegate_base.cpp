

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qitemdelegate_base.h"
  //#include "qitemdelegate_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QItemDelegate

    // constructors:
    
  // Class: QItemDelegate
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      QWidget* QItemDelegate_Base::createEditor(
      QWidget* parent, const QStyleOptionViewItem& option, const QModelIndex& index
    ) {

      //qDebug() << "QItemDelegate_Base::createEditor()";

      //QJSValue f = self.prototype().property("createEditor");
      QJSValue f = self.property("createEditor");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QWidget(
    handler, 
    // non-copyable: true
parent
  );


  args << RJSHelper::cpp2js_QStyleOptionViewItem(
    handler, 
    // non-copyable: false
option
  );


  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.createEditor.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_QWidget_ptr(handler, res);
          
      }
      else {
        
          return
        QItemDelegate::createEditor(
          parent, option, index
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      