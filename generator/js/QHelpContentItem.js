
      // auto generated
      //var self;

      // class constructor:
      function QHelpContentItem() {
        

        // should be QHelpContentItem_BaseJs.call(this, engine):
        //QHelpContentItem.prototype = new QHelpContentItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpContentItem.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QHelpContentItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QHelpContentItem.js: No constructor found for class QHelpContentItem");
            
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

      //QHelpContentItem.prototype = new QHelpContentItem_BaseJs(engine);
      //QHelpContentItem.prototype = new QHelpContentItem_Wrapper(engine);
      QHelpContentItem.prototype = new Object();


      QHelpContentItem.prototype.toString = function() {
          //return "QHelpContentItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpContentItem [JS]";
        };
      QHelpContentItem.getObjectType = function() {
        return RJSType_QHelpContentItem.getIdStatic();
      };

      QHelpContentItem.prototype.getObjectType = function() {
        return RJSType_QHelpContentItem.getIdStatic();
      };

      QHelpContentItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpContentItem.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QHelpContentItem.prototype.child = function(...args) 
          
        {
          //print("JS: QHelpContentItem.prototype.child");
          
              return this.__PROXY__.child(...args);
            
        };
        
        // function 
        QHelpContentItem.prototype.childCount = function(...args) 
          
        {
          //print("JS: QHelpContentItem.prototype.childCount");
          
              return this.__PROXY__.childCount(...args);
            
        };
        
        // function 
        QHelpContentItem.prototype.title = function(...args) 
          
        {
          //print("JS: QHelpContentItem.prototype.title");
          
              return this.__PROXY__.title(...args);
            
        };
        
        // function 
        QHelpContentItem.prototype.url = function(...args) 
          
        {
          //print("JS: QHelpContentItem.prototype.url");
          
              return this.__PROXY__.url(...args);
            
        };
        
        // function 
        QHelpContentItem.prototype.row = function(...args) 
          
        {
          //print("JS: QHelpContentItem.prototype.row");
          
              return this.__PROXY__.row(...args);
            
        };
        
        // function 
        QHelpContentItem.prototype.parent = function(...args) 
          
        {
          //print("JS: QHelpContentItem.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QHelpContentItem.prototype.childPosition = function(...args) 
          
        {
          //print("JS: QHelpContentItem.prototype.childPosition");
          
              return this.__PROXY__.childPosition(...args);
            
        };
        

      // static functions:
      QHelpContentItem.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHelpContentItem.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHelpContentItem.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpContentItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpContentItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHelpContentItem.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      