
      // auto generated
      //var self;

      // class constructor:
      function QLayoutItem() {
        

        // should be QLayoutItem_BaseJs.call(this, engine):
        //QLayoutItem.prototype = new QLayoutItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QLayoutItem.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QLayoutItem);
            //}
          }
          else {
            qWarning("QLayoutItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QLayoutItem.js: No constructor found for class QLayoutItem");
            
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

      //QLayoutItem.prototype = new QLayoutItem_BaseJs(engine);
      //QLayoutItem.prototype = new QLayoutItem_Wrapper(engine);
      QLayoutItem.prototype = new Object();

      QLayoutItem.prototype.toString = function() {
          //return "QLayoutItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLayoutItem [JS]";
        };
      QLayoutItem.getObjectType = function() {
        return RJSType_QLayoutItem.getIdStatic();
      };

      QLayoutItem.prototype.getObjectType = function() {
        return RJSType_QLayoutItem.getIdStatic();
      };

      QLayoutItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QLayoutItem.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QLayoutItem.prototype.sizeHint = function() 
          
        {
          //print("JS: QLayoutItem.prototype.sizeHint");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.sizeHint(
                // call highest level JS implementation:
                //return this.sizeHintBase(
                return this.sizeHintSuper(
                  
                );
              

        //copyProperties(this, wrapper, QLayoutItem);
  }

  
  else {
    
        print("QLayoutItem.sizeHint(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLayoutItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLayoutItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    