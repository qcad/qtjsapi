#include <QtCore/QtGlobal>

#if defined(RJSAPI_DLL)
#   if defined(RJSAPI_LIBRARY)
#       define RJSAPI_EXPORT Q_DECL_EXPORT
#   else
#       define RJSAPI_EXPORT Q_DECL_IMPORT
#   endif
#else
#   define RJSAPI_EXPORT
#endif
