interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export function getNotificationEmail({ name, email, message }: EmailTemplateProps): string {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>New Inquiry — Chris Eke</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap');
    body, #body-table { margin: 0 !important; padding: 0 !important; background: #EEEEE8; }
    body { font-family: 'Gabarito', Arial, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    img { border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    a { color: #006E4A; text-decoration: none; }
    @media only screen and (max-width: 600px) {
      .email-card { width: 100% !important; }
      .e-pad { padding: 28px 24px !important; }
      .e-hero-pad { padding: 6px 24px 32px !important; }
      .e-footer-pad { padding: 24px !important; }
      .e-h1 { font-size: 27px !important; }
      .e-stepdiv-indent { margin-left: 0 !important; }
      .e-step-num { display: none !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background: #EEEEE8;">
<table id="body-table" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#EEEEE8;">
  <tr>
    <td align="center" style="padding: 36px 15px;">
      <table class="email-card" width="600" cellpadding="0" cellspacing="0" border="0"
        style="max-width: 600px; width: 100%; background: #F5F5F0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(13,13,11,0.08);">

        <!-- ── HEADER ── -->
        <tr>
          <td style="background: #0D0D0B; padding: 24px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="font-family:'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: rgba(245,245,240,0.3); vertical-align: middle;">chriseke.com</td>
                    </tr>
                  </table>
                </td>
                <td align="right" style="font-family: 'Gabarito', Arial, sans-serif; font-size: 12px; font-weight: 700; color: #00B07A;">New Form Submission</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── HERO ── -->
        <tr>
          <td class="e-hero-pad" style="background: #0D0D0B; padding: 6px 36px 24px">
            <p class="e-h1" style="font-family: 'Gabarito', Arial, sans-serif; font-size: 36px; font-weight: 700; color:#F5F5F0; line-height: 100%; margin: 0 0 9px;">You have a new inquiry.</p>
            <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 18px; font-weight: 400; color: rgba(245, 245, 240, 0.65); margin: 0;">Submitted via chriseke.com</p>
          </td>
        </tr>

        <!-- ── BODY ── -->
        <tr>
          <td class="e-pad" style="padding:36px 40px;">

            <!-- Steps eyebrow -->
            <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 9px; font-weight: 700; color:#006E4A;text-transform: uppercase; margin: 0 0 36px;">Submission Details</p>

            <!-- Step 01 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 15px;">
              <tr>
                <td class="e-step-num" width="120" valign="top" style="width: 120px; vertical-align: top;">
                  <span style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: rgba(13, 13, 11, 0.25); line-height: 90%;">Name</span>
                </td>
                <td valign="top" style="vertical-align: top;">
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: #0D0D0B; margin: 0 0 6px;">${name}</p>
                </td>
              </tr>
            </table>
            <table class="e-stepdiv-indent" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 24px 120px;">
              <tr><td height="1" style="height:1px;background:rgba(13,13,11,0.06);font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>

            <!-- Step 02 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 15px;">
              <tr>
                <td class="e-step-num" width="120" valign="top" style="width: 120px; vertical-align: top;">
                  <span style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: rgba(13, 13, 11, 0.25); line-height: 90%;">Email</span>
                </td>
                <td valign="top" style="vertical-align: top;">
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: #006E4A; margin: 0 0 6px;">${email}</p>
                </td>
              </tr>
            </table>
            <table class="e-stepdiv-indent" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px 120px;">
              <tr><td height="1" style="height: 1px; background: rgba(13, 13, 11, 0.06); font-size: 0; line-height: 0;">&nbsp;</td></tr>
            </table>

            <!-- Step 03 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 15px;">
              <tr>
                <td class="e-step-num" width="120" valign="top" style="width: 120px; vertical-align: top;">
                  <span style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: rgba(13, 13, 11, 0.25); line-height: 90%;">Message</span>
                </td>
                </td>
                <td valign="top" style="vertical-align: top;">
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 400; color: rgba(13, 13, 11, 0.5); line-height: 130%; margin: 0;">${message}</p>
                </td>
              </tr>
            </table>


            <!-- Direct contact note -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin: 48px 0 24px 0;">
              <tr>
                <td style="background: #0D0D0B; border-radius: 100px; padding: 12px 18px;">
                  <a href="mailto:${email}?subject=Re: Your inquiry — chriseke.com"
                    style="font-family:'Gabarito',Arial,sans-serif;font-size:13px;font-weight:700;color:#F5F5F0;text-decoration:none;white-space:nowrap;">
                    Reply to ${name}
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- ── FOOTER ── -->
        <tr>
          <td class="e-footer-pad" style="background: #0D0D0B; padding: 24px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="bottom">
                  <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 9px;">
                    <tr>
                      <td style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: #F5F5F0; vertical-align: middle;">chriseke.com</td>
                    </tr>
                  </table>
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 12px; font-weight: 400; color: rgba(245, 245, 240, 0.28); margin: 0; line-height:1.65;">
                    Web Designer and Developer<br>
                    Dallas Fort Worth, TX &nbsp;&middot;&nbsp;
                    <a href="https://www.chriseke.com" style="color: rgba(245, 245, 240, 0.28); text-decoration: none;">chriseke.com</a>
                  </p>
                </td>
                <td align="right" valign="bottom">
                  <p style="font-family:'Gabarito', Arial, sans-serif; font-size: 12px; color: rgba(245, 245, 240, 0.16); margin: 0; line-height: 1.65; text-align: right;">
                    You're receiving this because a form <br>was submitted via chriseke.com.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>
    `.trim()
}
