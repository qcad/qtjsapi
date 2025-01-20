
      // auto generated
      //var self;

      // class constructor:
      function QScreen() {
        

        // should be QScreen_BaseJs.call(this, engine):
        //QScreen.prototype = new QScreen_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QScreen.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QScreen);
                
            //}
          }
          else {
            qWarning("QScreen.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QScreen.js: No constructor found for class QScreen");
            
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
              
    this["geometryChanged(QRect)"] = Object.getPrototypeOf(this).geometryChanged;
  
    this["availableGeometryChanged(QRect)"] = Object.getPrototypeOf(this).availableGeometryChanged;
  
    this["physicalSizeChanged(QSizeF)"] = Object.getPrototypeOf(this).physicalSizeChanged;
  
    this["physicalDotsPerInchChanged(qreal)"] = Object.getPrototypeOf(this).physicalDotsPerInchChanged;
  
    this["logicalDotsPerInchChanged(qreal)"] = Object.getPrototypeOf(this).logicalDotsPerInchChanged;
  
    this["virtualGeometryChanged(QRect)"] = Object.getPrototypeOf(this).virtualGeometryChanged;
  
    this["primaryOrientationChanged(Qt::ScreenOrientation)"] = Object.getPrototypeOf(this).primaryOrientationChanged;
  
    this["orientationChanged(Qt::ScreenOrientation)"] = Object.getPrototypeOf(this).orientationChanged;
  
    this["refreshRateChanged(qreal)"] = Object.getPrototypeOf(this).refreshRateChanged;
  
            }
          
        }

        

      }

      //QScreen.prototype = new QScreen_BaseJs(engine);
      //QScreen.prototype = new QScreen_Wrapper(engine);
      QScreen.prototype = new Object();

      QScreen.prototype.toString = function() {
          //return "QScreen [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QScreen [JS]";
        };
      QScreen.getObjectType = function() {
        return RJSType_QScreen.getIdStatic();
      };

      QScreen.prototype.getObjectType = function() {
        return RJSType_QScreen.getIdStatic();
      };

      QScreen.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QScreen.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
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
      //QScreen.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QScreen.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      