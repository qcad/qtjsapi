
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
              
                  this.__PROXY__ = wrapper;
                
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
                
                    return this.__PROXY__.sizeHintSuper(
                  
                );
              

        //copyProperties(this, wrapper, QLayoutItem);
  }

  
  else {
    
        print("QLayoutItem.sizeHint(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QLayoutItem.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.geometry = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.widget = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.layout = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.alignment = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QLayoutItem.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QLayoutItem.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
        

      // static functions:
      QLayoutItem.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QLayoutItem.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QLayoutItem.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QLayoutItem.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      