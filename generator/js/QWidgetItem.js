
      // auto generated
      //var self;

      // class constructor:
      function QWidgetItem() {
        

        // should be QWidgetItem_BaseJs.call(this, engine):
        //QWidgetItem.prototype = new QWidgetItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QWidgetItem.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QWidgetItem);
            //}
          }
          else {
            qWarning("QWidgetItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QWidgetItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QWidgetItem);
  }

  
  else {
    
        print("QWidgetItem(): wrong number / type of arguments");
      
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //QWidgetItem.prototype = new QWidgetItem_BaseJs(engine);
      //QWidgetItem.prototype = new QWidgetItem_Wrapper(engine);
      QWidgetItem.prototype = new Object();

      QWidgetItem.prototype.toString = function() {
          //return "QWidgetItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QWidgetItem [JS]";
        };
      QWidgetItem.getObjectType = function() {
        
            return RJSType_QWidgetItem.getIdStatic();
          
      };

      QWidgetItem.prototype.getObjectType = function() {
        
            return RJSType_QWidgetItem.getIdStatic();
          
      };

      QWidgetItem.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QWidgetItem.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QLayoutItem.getIdStatic()) {
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
      //QWidgetItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QWidgetItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    