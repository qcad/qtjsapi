
      // auto generated
      //var self;

      // class constructor:
      function QHelpSearchResultWidget() {
        

        // should be QHelpSearchResultWidget_BaseJs.call(this, engine):
        //QHelpSearchResultWidget.prototype = new QHelpSearchResultWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpSearchResultWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QHelpSearchResultWidget);
                
            //}
          }
          else {
            qWarning("QHelpSearchResultWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QHelpSearchResultWidget.js: No constructor found for class QHelpSearchResultWidget");
            
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["requestShowLink(QUrl)"] = Object.getPrototypeOf(this).requestShowLink;
  
            }
          
        }

        

      }

      //QHelpSearchResultWidget.prototype = new QHelpSearchResultWidget_BaseJs(engine);
      //QHelpSearchResultWidget.prototype = new QHelpSearchResultWidget_Wrapper(engine);
      QHelpSearchResultWidget.prototype = new Object();

      QHelpSearchResultWidget.prototype.toString = function() {
          //return "QHelpSearchResultWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpSearchResultWidget [JS]";
        };
      QHelpSearchResultWidget.getObjectType = function() {
        return RJSType_QHelpSearchResultWidget.getIdStatic();
      };

      QHelpSearchResultWidget.prototype.getObjectType = function() {
        return RJSType_QHelpSearchResultWidget.getIdStatic();
      };

      QHelpSearchResultWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpSearchResultWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpSearchResultWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpSearchResultWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      