
      // auto generated
      //var self;

      // class constructor:
      function QBoxLayout() {
        

        // should be QBoxLayout_BaseJs.call(this, engine):
        //QBoxLayout.prototype = new QBoxLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QBoxLayout.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QBoxLayout);
                
            //}
          }
          else {
            qWarning("QBoxLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QBoxLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QBoxLayout);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QBoxLayout);
  }

  
  else {
    
        print("QBoxLayout(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
          
        }

        

      }

      //QBoxLayout.prototype = new QBoxLayout_BaseJs(engine);
      //QBoxLayout.prototype = new QBoxLayout_Wrapper(engine);
      QBoxLayout.prototype = new Object();

      QBoxLayout.prototype.toString = function() {
          //return "QBoxLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QBoxLayout [JS]";
        };
      QBoxLayout.getObjectType = function() {
        return RJSType_QBoxLayout.getIdStatic();
      };

      QBoxLayout.prototype.getObjectType = function() {
        return RJSType_QBoxLayout.getIdStatic();
      };

      QBoxLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QBoxLayout.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayoutItem.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayout.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Direction
QBoxLayout.LeftToRight = QBoxLayout_Wrapper.LeftToRight;
QBoxLayout.RightToLeft = QBoxLayout_Wrapper.RightToLeft;
QBoxLayout.TopToBottom = QBoxLayout_Wrapper.TopToBottom;
QBoxLayout.BottomToTop = QBoxLayout_Wrapper.BottomToTop;
QBoxLayout.Down = QBoxLayout_Wrapper.Down;
QBoxLayout.Up = QBoxLayout_Wrapper.Up;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QBoxLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QBoxLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      