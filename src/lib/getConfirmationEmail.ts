interface EmailTemplateProps {
    name: string;
    message: string;
}

export function getConfirmationEmail({ name, message }: EmailTemplateProps): string {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Got your message — Chris Eke</title>
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
                <td align="right" style="font-family: 'Gabarito', Arial, sans-serif; font-size: 12px; font-weight: 700; color: #00B07A;">Message received</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── HERO ── -->
        <tr>
          <td class="e-hero-pad" style="background: #0D0D0B; padding: 6px 36px 24px">
            <p class="e-h1" style="font-family: 'Gabarito', Arial, sans-serif; font-size: 36px; font-weight: 700; color:#F5F5F0; line-height: 100%; margin: 0 0 9px;">Got it, ${name}.</p>
            <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 18px; font-weight: 400; color: rgba(245, 245, 240, 0.65); margin: 0;">I'll be in touch shortly.</p>
          </td>
        </tr>

        <!-- ── BODY ── -->
        <tr>
          <td class="e-pad" style="padding:36px 40px;">

            <!-- Intro -->
            <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 400; color: rgba(13, 13, 11, 0.68); line-height: 1.75; margin: 0 0 24px;">
              Thanks for reaching out. I've received your message and I'll get back to you within
              <strong style="color: #006E4A; font-weight: 600;">one business day</strong>.
              Here's what happens next.
            </p>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 27px;">
              <tr><td height="1" style="height: 1px; background:rgba(13, 13, 11, 0.08); font-size: 0; line-height: 0;">&nbsp;</td></tr>
            </table>

            <!-- Steps eyebrow -->
            <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 9px; font-weight: 700; color:#006E4A;text-transform: uppercase; margin:0 0 18px;">What happens next</p>

            <!-- Step 01 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
              <tr>
                <td class="e-step-num" width="54" valign="top" style="width: 54px; vertical-align: top;">
                  <span style="font-family: 'Gabarito', Arial, sans-serif; font-size: 36px; font-weight: 700; color: rgba(13, 13, 11, 0.07); line-height: 90%;">01</span>
                </td>
                <td valign="top" style="vertical-align: top;">
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: #0D0D0B; margin: 0 0 6px;">I review your message</p>
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 400; color: rgba(13, 13, 11, 0.5); line-height: 130%; margin: 0;">I'll read through what you've shared and come prepared with the right questions. No generic responses.</p>
                </td>
              </tr>
            </table>
            <table class="e-stepdiv-indent" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 24px 44px;">
              <tr><td height="1" style="height:1px;background:rgba(13,13,11,0.06);font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>

            <!-- Step 02 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
              <tr>
                <td class="e-step-num" width="54" valign="top" style="width: 54px; vertical-align: top;">
                  <span style="font-family: 'Gabarito', Arial, sans-serif; font-size: 36px; font-weight: 700; color: rgba(13, 13, 11, 0.07); line-height: 90%;">02</span>
                </td>
                <td valign="top" style="vertical-align: top;">
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: #0D0D0B; margin: 0 0 6px;">I reach out to schedule a call</p>
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 400; color: rgba(13, 13, 11, 0.5); line-height: 130%; margin: 0;">I'll reply to this email with a few times that work, or a link to book directly on my calendar.</p>
                </td>
              </tr>
            </table>
            <table class="e-stepdiv-indent" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px 44px;">
              <tr><td height="1" style="height: 1px; background: rgba(13, 13, 11, 0.06); font-size: 0; line-height: 0;">&nbsp;</td></tr>
            </table>

            <!-- Step 03 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
              <tr>
                <td class="e-step-num" width="54" valign="top" style="width: 54px; vertical-align: top;">
                  <span style="font-family: 'Gabarito', Arial, sans-serif; font-size: 36px; font-weight: 700; color: rgba(13, 13, 11, 0.07); line-height: 90%;">03</span>
                </td>
                <td valign="top" style="vertical-align: top;">
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 700; color: #0D0D0B; margin: 0 0 6px;">We talk and figure out a plan</p>
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 400; color: rgba(13, 13, 11, 0.5); line-height: 130%; margin: 0;">A free 20-minute call to talk through your project, answer your questions, and see if we're a good fit. No pressure, no pitch.</p>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
              <tr><td height="1" style="height: 1px; background: rgba(13, 13, 11, 0.08); font-size: 0; line-height: 0;">&nbsp;</td></tr>
            </table>

            <!-- Message echo -->
            <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 9px; font-weight: 700; color: #006E4A; text-transform: uppercase; margin: 0 0 18px;">Your Message</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
              <tr>
                <td style="background: #EEEEE8; border-radius: 9px; padding: 18px 24px; border: 1px solid rgba(13, 13, 11, 0.07);">
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 400; color: rgba(13, 13, 11, 0.55); line-height:1.75; margin: 0;">${message}</p>
                </td>
              </tr>
            </table>

            <!-- Direct contact note -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="">
              <tr>
                <td style="">
                  <p style="font-family: 'Gabarito', Arial, sans-serif; font-size: 15px; font-weight: 400; color: rgba(13, 13, 11, 0.52); line-height:1.75; margin: 12px 0;">
                    Need to add something or reach me sooner? Reply directly to this email or reach me at
                    <a href="mailto:iam@chriseke.com" style="color: #006E4A; font-weight: 700; text-decoration: none;">iam@chriseke.com</a>.
                  </p>
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
                    You're receiving this because<br>you submitted a form on chriseke.com.
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
