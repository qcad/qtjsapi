
      // auto generated
      //var self;

      // class constructor:
      function QDialog() {
        

        // should be QDialog_BaseJs.call(this, engine):
        //QDialog.prototype = new QDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDialog.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QDialog);
                
            //}
          }
          else {
            qWarning("QDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QDialog);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDialog);
  }

  
  else {
    
        print("QDialog(): wrong number / type of arguments");
      
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
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["finished(int)"] = Object.getPrototypeOf(this).finished;
  
            }
          
        }

        

      }

      //QDialog.prototype = new QDialog_BaseJs(engine);
      //QDialog.prototype = new QDialog_Wrapper(engine);
      QDialog.prototype = new Object();

      QDialog.prototype.toString = function() {
          //return "QDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDialog [JS]";
        };
      QDialog.getObjectType = function() {
        return RJSType_QDialog.getIdStatic();
      };

      QDialog.prototype.getObjectType = function() {
        return RJSType_QDialog.getIdStatic();
      };

      QDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDialog.getIdStatic()) {
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
      
  // enum: DialogCode
QDialog.Rejected = QDialog_Wrapper.Rejected;
QDialog.Accepted = QDialog_Wrapper.Accepted;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      