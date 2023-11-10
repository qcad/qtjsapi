
  // Auto generated
  
    #ifndef QFILEINFO_H_WRAPPER
    #define QFILEINFO_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QDir>
      
        #include <QDateTime>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QFileInfo>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QFileInfo
    class QFileInfo_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QFileInfo_Wrapper(const QFileInfo_Wrapper&);

    public:
      // initialization of QFileInfo:
      static void init(RJSApi& handler);

      
        static QFileInfo* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QFileInfo:
          for (int i=0; i<basecasters_QFileInfo.length(); i++) {
            RJSBasecaster_QFileInfo* basecaster = basecasters_QFileInfo[i];
            QFileInfo* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QFileInfo:
          if (t==RJSType_QFileInfo::getIdStatic()) {
            return (QFileInfo*)vp;
          }

          qWarning() << "QFileInfo_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QFileInfo* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QFileInfo*: wrapper wraps NULL";
          }

          QFileInfo* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QFileInfo*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QFileInfo_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QFileInfo_Wrapper(RJSApi& h, QFileInfo* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QFileInfo_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QFileInfo
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QFileInfo_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QFileInfo
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileInfo
    // Function: setFile
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFile
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileInfo
    // Function: exists
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exists
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileInfo
    // Function: refresh
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  refresh
              (

                
              )
              
              ;
            
    // Class: QFileInfo
    // Function: filePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  filePath
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: absoluteFilePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  absoluteFilePath
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: canonicalFilePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  canonicalFilePath
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: fileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fileName
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: baseName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baseName
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: completeBaseName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  completeBaseName
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: suffix
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  suffix
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: bundleName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bundleName
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: completeSuffix
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  completeSuffix
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: path
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  path
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: absolutePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  absolutePath
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: canonicalPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  canonicalPath
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: dir
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dir
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: absoluteDir
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  absoluteDir
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isReadable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isReadable
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isWritable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWritable
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isExecutable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isExecutable
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isHidden
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isHidden
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isNativePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNativePath
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isRelative
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRelative
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isAbsolute
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAbsolute
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: makeAbsolute
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  makeAbsolute
              (

                
              )
              
              ;
            
    // Class: QFileInfo
    // Function: isFile
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFile
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isDir
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDir
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isSymLink
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSymLink
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isSymbolicLink
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSymbolicLink
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isShortcut
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isShortcut
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isJunction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isJunction
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isRoot
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRoot
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: isBundle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBundle
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: symLinkTarget
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  symLinkTarget
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: owner
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  owner
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: ownerId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerId
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: group
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  group
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: groupId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  groupId
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: permission
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  permission
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: permissions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  permissions
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: birthTime
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  birthTime
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: metadataChangeTime
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  metadataChangeTime
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: lastModified
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastModified
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: lastRead
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastRead
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: fileTime
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fileTime
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: caching
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  caching
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileInfo
    // Function: setCaching
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCaching
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QFileInfo::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QFileInfo* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QFileInfo* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QFileInfo* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QFileInfo*> basecasters_QFileInfo;

      public:
        static void registerBasecaster_QFileInfo(RJSBasecaster_QFileInfo* bc) {
          basecasters_QFileInfo.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QFileInfo_Wrapper*)

    Q_DECLARE_INTERFACE(QFileInfo_Wrapper, "org.qcad.QFileInfo_Wrapper")

  
  #endif
  
