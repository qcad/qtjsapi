
      // auto generated
      //var self;

      // class constructor:
      function QStandardItem() {
        

        // should be QStandardItem_BaseJs.call(this, engine):
        //QStandardItem.prototype = new QStandardItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QStandardItem_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QStandardItem);
            //}
          }
          else {
            qWarning("QStandardItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QStandardItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStandardItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItem);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QStandardItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStandardItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItem);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStandardItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStandardItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItem);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStandardItem_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStandardItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItem);
  }

  
  else {
    
        print("QStandardItem(): wrong number / type of arguments");
      
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

      //QStandardItem.prototype = new QStandardItem_BaseJs(engine);
      //QStandardItem.prototype = new QStandardItem_Wrapper(engine);
      QStandardItem.prototype = new Object();

      QStandardItem.prototype.toString = function() {
          //return "QStandardItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStandardItem [JS]";
        };
      QStandardItem.getObjectType = function() {
        
            return RJSType.QStandardItem_Type;
          
      };

      QStandardItem.prototype.getObjectType = function() {
        
            return RJSType.QStandardItem_Type;
          
      };

      QStandardItem.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QStandardItem_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QStandardItem_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: ItemType
QStandardItem.Type = QStandardItem_Wrapper.Type;
QStandardItem.UserType = QStandardItem_Wrapper.UserType;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStandardItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStandardItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    