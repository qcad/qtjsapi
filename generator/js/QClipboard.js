
      // auto generated
      //var self;

      // class constructor:
      function QClipboard() {
        

        // should be QClipboard_BaseJs.call(this, engine):
        //QClipboard.prototype = new QClipboard_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QClipboard_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QClipboard);
            //}
          }
          else {
            qWarning("QClipboard.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QClipboard.js: No constructor found for class QClipboard");
            
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
            
    this["changed(QClipboard::Mode)"] = Object.getPrototypeOf(this).changed;
  
          }
        }
      }

      //QClipboard.prototype = new QClipboard_BaseJs(engine);
      //QClipboard.prototype = new QClipboard_Wrapper(engine);
      QClipboard.prototype = new Object();

      QClipboard.prototype.toString = function() {
          //return "QClipboard [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QClipboard [JS]";
        };
      QClipboard.getObjectType = function() {
        
            return RJSType.QClipboard_Type;
          
      };

      QClipboard.prototype.getObjectType = function() {
        
            return RJSType.QClipboard_Type;
          
      };

      QClipboard.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QClipboard_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QClipboard_Type, 
          
            RJSType.QObject_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: Mode
QClipboard.Clipboard = QClipboard_Wrapper.Clipboard;
QClipboard.Selection = QClipboard_Wrapper.Selection;
QClipboard.FindBuffer = QClipboard_Wrapper.FindBuffer;
QClipboard.LastMode = QClipboard_Wrapper.LastMode;


      // functions:
      

      // static functions:
      

        // static function 
        QClipboard.tr = function() 
          
        {
          //print("JS: QClipboard.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QClipboard_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QClipboard);
  }

  
  else {
    
        print("QClipboard.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QClipboard.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QClipboard.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    