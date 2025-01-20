
      // auto generated
      //var self;

      // class constructor:
      function QSplitter() {
        

        // should be QSplitter_BaseJs.call(this, engine):
        //QSplitter.prototype = new QSplitter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSplitter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSplitter);
                
            //}
          }
          else {
            qWarning("QSplitter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSplitter_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSplitter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSplitter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSplitter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else {
    
        print("QSplitter(): wrong number / type of arguments");
      
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
  
    this["splitterMoved(int,int)"] = Object.getPrototypeOf(this).splitterMoved;
  
            }
          
        }

        

      }

      //QSplitter.prototype = new QSplitter_BaseJs(engine);
      //QSplitter.prototype = new QSplitter_Wrapper(engine);
      QSplitter.prototype = new Object();

      QSplitter.prototype.toString = function() {
          //return "QSplitter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSplitter [JS]";
        };
      QSplitter.getObjectType = function() {
        return RJSType_QSplitter.getIdStatic();
      };

      QSplitter.prototype.getObjectType = function() {
        return RJSType_QSplitter.getIdStatic();
      };

      QSplitter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSplitter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QSplitter.NoFrame = QSplitter_Wrapper.NoFrame;
QSplitter.Box = QSplitter_Wrapper.Box;
QSplitter.Panel = QSplitter_Wrapper.Panel;
QSplitter.WinPanel = QSplitter_Wrapper.WinPanel;
QSplitter.HLine = QSplitter_Wrapper.HLine;
QSplitter.VLine = QSplitter_Wrapper.VLine;
QSplitter.StyledPanel = QSplitter_Wrapper.StyledPanel;

  // enum: Shadow
QSplitter.Plain = QSplitter_Wrapper.Plain;
QSplitter.Raised = QSplitter_Wrapper.Raised;
QSplitter.Sunken = QSplitter_Wrapper.Sunken;

  // enum: StyleMask
QSplitter.Shadow_Mask = QSplitter_Wrapper.Shadow_Mask;
QSplitter.Shape_Mask = QSplitter_Wrapper.Shape_Mask;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSplitter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSplitter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      