
      // auto generated
      //var self;

      // class constructor:
      function QModelIndex() {
        

        // should be QModelIndex_BaseJs.call(this, engine):
        //QModelIndex.prototype = new QModelIndex_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QModelIndex.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QModelIndex);
            //}
          }
          else {
            qWarning("QModelIndex.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QModelIndex.js: No constructor found for class QModelIndex");
            
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

      //QModelIndex.prototype = new QModelIndex_BaseJs(engine);
      //QModelIndex.prototype = new QModelIndex_Wrapper(engine);
      QModelIndex.prototype = new Object();

      QModelIndex.prototype.toString = function() {
          //return "QModelIndex [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QModelIndex [JS]";
        };
      QModelIndex.getObjectType = function() {
        
            return RJSType_QModelIndex.getIdStatic();
          
      };

      QModelIndex.prototype.getObjectType = function() {
        
            return RJSType_QModelIndex.getIdStatic();
          
      };

      QModelIndex.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QModelIndex.getIdStatic()) {
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
      //QModelIndex.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QModelIndex.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    