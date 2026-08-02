
  // Auto generated
  
    #ifndef QSSL_H_WRAPPER
    #define QSSL_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSsl>
      
    // wrapper class for QSsl
    class QTJSAPI_EXPORT QSsl_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSsl_Wrapper(const QSsl_Wrapper&);

    public:
      // initialization of QSsl:
      static void init(RJSApi& handler);

      
        // enums:
        
  enum KeyType {
    PrivateKey = QSsl::PrivateKey,
PublicKey = QSsl::PublicKey,

  };
  Q_ENUM(KeyType)

  enum EncodingFormat {
    Pem = QSsl::Pem,
Der = QSsl::Der,

  };
  Q_ENUM(EncodingFormat)

  enum KeyAlgorithm {
    Opaque = QSsl::Opaque,
Rsa = QSsl::Rsa,
Dsa = QSsl::Dsa,
Ec = QSsl::Ec,
Dh = QSsl::Dh,

  };
  Q_ENUM(KeyAlgorithm)

  enum AlternativeNameEntryType {
    EmailEntry = QSsl::EmailEntry,
DnsEntry = QSsl::DnsEntry,
IpAddressEntry = QSsl::IpAddressEntry,

  };
  Q_ENUM(AlternativeNameEntryType)

  enum SslProtocol {
    TlsV1_2 = QSsl::TlsV1_2,
AnyProtocol = QSsl::AnyProtocol,
SecureProtocols = QSsl::SecureProtocols,
TlsV1_2OrLater = QSsl::TlsV1_2OrLater,
DtlsV1_2 = QSsl::DtlsV1_2,
DtlsV1_2OrLater = QSsl::DtlsV1_2OrLater,
TlsV1_3 = QSsl::TlsV1_3,
TlsV1_3OrLater = QSsl::TlsV1_3OrLater,
UnknownProtocol = QSsl::UnknownProtocol,

  };
  Q_ENUM(SslProtocol)

  enum SslOption {
    SslOptionDisableEmptyFragments = QSsl::SslOptionDisableEmptyFragments,
SslOptionDisableSessionTickets = QSsl::SslOptionDisableSessionTickets,
SslOptionDisableCompression = QSsl::SslOptionDisableCompression,
SslOptionDisableServerNameIndication = QSsl::SslOptionDisableServerNameIndication,
SslOptionDisableLegacyRenegotiation = QSsl::SslOptionDisableLegacyRenegotiation,
SslOptionDisableSessionSharing = QSsl::SslOptionDisableSessionSharing,
SslOptionDisableSessionPersistence = QSsl::SslOptionDisableSessionPersistence,
SslOptionDisableServerCipherPreference = QSsl::SslOptionDisableServerCipherPreference,

  };
  Q_ENUM(SslOption)


  // constructors:
  

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    };

    Q_DECLARE_METATYPE(QSsl_Wrapper*)

    Q_DECLARE_INTERFACE(QSsl_Wrapper, "org.qcad.QSsl_Wrapper")

  
  #endif
  
