
      // auto generated
      //var self;

      // class constructor:
      function QAbstractButton() {
        

        // should be QAbstractButton_BaseJs.call(this, engine):
        //QAbstractButton.prototype = new QAbstractButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractButton.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QAbstractButton);
                
            //}
          }
          else {
            qWarning("QAbstractButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractButton.js: No constructor found for class QAbstractButton");
            
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
  
    this["clicked(bool)"] = Object.getPrototypeOf(this).clicked;
  
    this["toggled(bool)"] = Object.getPrototypeOf(this).toggled;
  
            }
          
        }

        

      }

      //QAbstractButton.prototype = new QAbstractButton_BaseJs(engine);
      //QAbstractButton.prototype = new QAbstractButton_Wrapper(engine);
      QAbstractButton.prototype = new Object();

      QAbstractButton.prototype.toString = function() {
          //return "QAbstractButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractButton [JS]";
        };
      QAbstractButton.getObjectType = function() {
        return RJSType_QAbstractButton.getIdStatic();
      };

      QAbstractButton.prototype.getObjectType = function() {
        return RJSType_QAbstractButton.getIdStatic();
      };

      QAbstractButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractButton.getIdStatic()) {
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
      //QAbstractButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      